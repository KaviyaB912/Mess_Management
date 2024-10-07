import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import './StudentDetails.css';

function StudentDetails() {
    const location = useLocation();
    const { register_number } = location.state;  // Retrieved from login
    
    const months = [
        { name: "January", paid: true },
        { name: "February", paid: false },
        { name: "March", paid: true },
        { name: "April", paid: true },
        { name: "May", paid: false },
        { name: "June", paid: true },
        { name: "July", paid: false },
        { name: "August", paid: true },
        { name: "September", paid: true },
        { name: "October", paid: true },
        { name: "November", paid: false },
        { name: "December", paid: true }
    ];
    const navigate = useNavigate();

    const navigateToScanner = (month) => {
        navigate(`/scanner?month=${month}`);
    };

    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch student details from the server
        const fetchStudentDetails = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/student-details', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ register_number }),
                });
                const data = await response.json();
                if (data.student) {
                    setStudent(data.student);
                } else {
                    setError(data.message);
                }
            } catch (error) {
                setError('Error fetching student data');
            } finally {
                setLoading(false);
            }
        };

        fetchStudentDetails();
    }, [register_number]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="student-container">
            {/* Sidebar Section */}
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2 className="sidebar-title">Buddy Project</h2>
                    {student && (
                        <div className="student-info">
                            <p><strong>Name:</strong> {student.name}</p>
                            <p><strong>Register No:</strong> {student.register_number}</p>
                            <p><strong>Department:</strong> {student.dept}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content Section */}
            <div className="student-details-content">
                <h2>Student Payment Details</h2>
                {student ? (
                    <div>
                        <table className="student-details-table">
                            <tbody>
                                <tr>
                                    <th className='stu_Table_head'>Register Number</th>
                                    <td>{student.register_number}</td>
                                </tr>
                                <tr>
                                    <th className='stu_Table_head'>Name</th>
                                    <td>{student.name}</td>
                                </tr>
                                <tr>
                                    <th className='stu_Table_head'>Department</th>
                                    <td>{student.dept}</td>
                                </tr>
                                <tr>
                                    <th className='stu_Table_head'>Year</th>
                                    <td>{student.year}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="actions-grid">
                        {months.map((month, index) => (
                        <div key={index} className="action-item">
                            <div className="action-icon">📅</div>
                            <p>{month.name}</p>
                            <div className={`payment-status ${month.paid ? 'paid' : 'not-paid'}`}>
                                {month.paid ? <i className="status-icon">✔</i> : <i className="status-icon">❌</i>}
                                <span>{month.paid ? 'Paid' : 'Not Paid'}</span>
                            </div>
                            {!month.paid && (
                                <button className="pay-button" onClick={() => navigateToScanner(month.name)}>
                                    Pay Now
                                </button>
                            )}
                        </div>
                    ))}
                        </div>
                    </div>
                ) : (
                    <p>No student data available.</p>
                )}
            </div>
        </div>
    );
}

export default StudentDetails;