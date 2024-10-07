import React from 'react';
import { useLocation } from 'react-router-dom';
import './StudentDetails.css';  

function StudentDetails() {
    const location = useLocation();
    const student = location.state?.student;   

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
                                    <th>Register Number</th>
                                    <td>{student.register_number}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{student.name}</td>
                                </tr>
                                <tr>
                                    <th>Department</th>
                                    <td>{student.dept}</td>
                                </tr>
                                <tr>
                                    <th>Year</th>
                                    <td>{student.year}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="actions-grid">
                            {Object.keys(student).filter(month => !['register_number', 'name', 'dept', 'year'].includes(month)).map((month) => (
                                <div key={month} className="action-item">
                                    <div className="action-icon">📅</div>
                                    <p>{month.charAt(0).toUpperCase() + month.slice(1)}</p>

                                    <div className={`payment-status ${parseFloat(student[month]) === 0.00 ? 'paid' : 'not-paid'}`}>

                                         {parseFloat(student[month]) === 0.00 ? (
                                            <>
                                                <i className="status-icon">✔️</i>
                                                <span>Paid</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Not Paid</span>
                                                <p className="amount-due">Amount Due: ${student[month]}</p>
                                            </>
                                        )}
                                    </div>
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
};
export default Dashboard;
