const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kaviya", 
  database: "mess", 
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.log("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

// Login Route
app.post("/login", (req, res) => {
  const { register_number, aadhar_number } = req.body;

  // Query to check if the register_number and aadhar_number exist in login_cred table
  const loginQuery = `
    SELECT * FROM login_cred
    WHERE register_number = ? AND aadhar_number = ?
  `;

  db.query(loginQuery, [register_number, aadhar_number], (err, result) => {
    if (err) {
      console.error("Error executing login query:", err);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }

    if (result.length > 0) {
      // Fetch additional student details from the students table
      const detailsQuery = `
        SELECT * FROM students
        WHERE register_number = ?
      `;

      db.query(detailsQuery, [register_number], (detailsErr, detailsResult) => {
        if (detailsErr) {
          console.error("Error fetching student details:", detailsErr);
          return res.status(500).json({ success: false, message: "Error fetching student details" });
        }

        if (detailsResult.length > 0) {
          // Send the student's details as a response
          return res.status(200).json({ success: true, data: detailsResult[0] });
        } else {
          // No details found for the register number
          return res.status(404).json({ success: false, message: "No student details found" });
        }
      });
    } else {
      // No matching login credentials
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }
  });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
