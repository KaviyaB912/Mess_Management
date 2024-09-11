import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [registerNumber, setRegisterNumber] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          register_number: registerNumber,
          aadhar_number: aadharNumber,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Navigate to student details page with the student data
        navigate("/student-details", { state: { student: data.data } });
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-section">
          <h1>Welcome</h1>
          <p>Login with your Credentials..</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div className="form-group">
              <label>Register Number</label>
              <input
                type="text"
                placeholder="Your Registration number"
                value={registerNumber}
                onChange={(e) => setRegisterNumber(e.target.value)}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>Aadhar Number</label>
              <input
                type="text"
                placeholder="Your Aadhar Number"
                value={aadharNumber}
                onChange={(e) => setAadharNumber(e.target.value)}
                className="input-field"
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <div className="login_div">
              <button type="submit" className="login-btn">
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="login-image-section">
        <img src={require("../../assets/Log.jpg")} alt="Login Visual" />
      </div>
    </div>
  );
}

export default Login;
