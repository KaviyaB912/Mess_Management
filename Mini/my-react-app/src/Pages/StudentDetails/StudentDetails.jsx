// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import './StudentDetails.css';

// function StudentDetails() {
//     const location = useLocation();
//     const { register_number } = location.state;  // Retrieved from login

//     const [student, setStudent] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Fetch student details from the server
//         const fetchStudentDetails = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/student-details', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({ register_number }),
//                 });
//                 const data = await response.json();
//                 if (data.student) {
//                     setStudent(data.student);
//                 } else {
//                     setError(data.message);
//                 }
//             } catch (error) {
//                 setError('Error fetching student data');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchStudentDetails();
//     }, [register_number]);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>{error}</p>;
//     }

//     return (
//         <div className="student-container">
//             {/* Sidebar Section */}
//             <div className="sidebar">
//                 <div className="sidebar-header">
//                     <h2 className="sidebar-title">Buddy Project</h2>
//                     {student && (
//                         <div className="student-info">
//                             <p><strong>Name:</strong> {student.name}</p>
//                             <p><strong>Register No:</strong> {student.register_number}</p>
//                             <p><strong>Department:</strong> {student.dept}</p>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Main Content Section */}
//             <div className="student-details-content">
//                 <h2>Student Payment Details</h2>
//                 {student ? (
//                     <div>
//                         <table className="student-details-table">
//                             <tbody>
//                                 <tr>
//                                     <th>Register Number</th>
//                                     <td>{student.register_number}</td>
//                                 </tr>
//                                 <tr>
//                                     <th>Name</th>
//                                     <td>{student.name}</td>
//                                 </tr>
//                                 <tr>
//                                     <th>Department</th>
//                                     <td>{student.dept}</td>
//                                 </tr>
//                                 <tr>
//                                     <th>Year</th>
//                                     <td>{student.year}</td>
//                                 </tr>
//                             </tbody>
//                         </table>

//                         <div className="actions-grid">
//                             {Object.keys(student).filter(month => month !== 'register_number' && month !== 'name' && month !== 'dept' && month !== 'year').map((month) => (
//                                 <div key={month} className="action-item">
//                                     <div className="action-icon">📅</div>
//                                     <p>{month.charAt(0).toUpperCase() + month.slice(1)}</p>
//                                     <div className={`payment-status ${student[month] === 0 ? 'paid' : 'not-paid'}`}>
//                                         {student[month] === 0 ? (
//                                             <>
//                                                 <i className="status-icon">✔️</i>
//                                                 <span>Paid</span>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <span>Not Paid</span>
//                                                 <p className="amount-due">Amount Due: ${student[month]}</p>
//                                             </>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ) : (
//                     <p>No student data available.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default StudentDetails;
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './StudentDetails.css';

function StudentDetails() {
    const location = useLocation();
    const { register_number } = location.state;  // Retrieved from login

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
}

export default StudentDetails;
