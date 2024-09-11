import React from 'react';
import { useLocation } from 'react-router-dom';
import './StudentDetails.css';  

function StudentDetails() {
    const location = useLocation();
    const student = location.state?.student;   

    return (
        <div className="student-details-container">
            <h2>Student Details</h2>
            {student ? (
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
                        <tr>
                            <th>January Amount</th>
                            <td>{student.jan}</td>
                        </tr>
                        <tr>
                            <th>February Amount</th>
                            <td>{student.feb}</td>
                        </tr>
                        <tr>
                            <th>March Amount</th>
                            <td>{student.mar}</td>
                        </tr>
                        <tr>
                            <th>April Amount</th>
                            <td>{student.apr}</td>
                        </tr>
                        <tr>
                            <th>May Amount</th>
                            <td>{student.may}</td>
                        </tr>
                        <tr>
                            <th>June Amount</th>
                            <td>{student.jun}</td>
                        </tr>
                        <tr>
                            <th>July Amount</th>
                            <td>{student.jul}</td>
                        </tr>
                        <tr>
                            <th>August Amount</th>
                            <td>{student.aug}</td>
                        </tr>
                        <tr>
                            <th>September Amount</th>
                            <td>{student.sep}</td>
                        </tr>
                        <tr>
                            <th>October Amount</th>
                            <td>{student.oct}</td>
                        </tr>
                        <tr>
                            <th>November Amount</th>
                            <td>{student.nov}</td>
                        </tr>
                        <tr>
                            <th>December Amount</th>
                            <td>{student.dece}</td>
                        </tr>
                        <tr>
                            <th>Due Amount</th>
                            <td>{student.due}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>No student data available.</p>
            )}
        </div>
    );
}

export default StudentDetails;
