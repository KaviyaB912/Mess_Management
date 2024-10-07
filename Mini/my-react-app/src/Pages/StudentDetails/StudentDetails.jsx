// import React from 'react';
// import './StudentDetails.css';

// const months = [
//     { name: "January", paid: true },
//     { name: "February", paid: false },
//     { name: "March", paid: true },
//     { name: "April", paid: true },
//     { name: "May", paid: false },
//     { name: "June", paid: true },
//     { name: "July", paid: false },
//     { name: "August", paid: true },
//     { name: "September", paid: true },
//     { name: "October", paid: true },
//     { name: "November", paid: false },
//     { name: "December", paid: true }
// ];

// const Dashboard = () => {
//     return (
//         <div className="dashboard-container">
//             {/* Sidebar */}
//             <div className="sidebar">
//                 <div className="sidebar-header">
//                     <h2 className="sidebar-title">Buddy Project</h2>
//                 </div>
//                 <ul className="sidebar-menu">
//                     <li> <i className="menu-icon">📄</i> Pipelines </li>
//                     <li> <i className="menu-icon">🖥</i> Sandbox </li>
//                     <li> <i className="menu-icon">💻</i> Code </li>
//                     <li> <i className="menu-icon">📊</i> Activity </li>
//                 </ul>
//                 <div className="sidebar-footer">
//                     <i className="footer-icon">🔍</i> Search
//                     <br />
//                     <i className="footer-icon">💬</i> Support
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="main-content">
//                 <div className="main-header">
//                     <h3>Monthly Payment Status</h3>
//                 </div>
//                 <div className="actions-grid">
//                     {months.map((month, index) => (
//                         <div key={index} className="action-item">
//                             <div className="action-icon">📅</div>
//                             <p>{month.name}</p>
//                             <div className={`payment-status ${month.paid ? 'paid' : 'not-paid'}`}>
//                                 {month.paid ? <i className="status-icon">✔</i> : <i className="status-icon">❌</i>}
//                                 <span>{month.paid ? 'Paid' : 'Not Paid'}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Dashboard;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDetails.css';
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

const Dashboard = () => {
    const navigate = useNavigate();

    const navigateToScanner = (month) => {
        navigate(`/scanner?month=${month}`);
    };

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2 className="sidebar-title">Buddy Project</h2>
                </div>
                <ul className="sidebar-menu">
                    <li> <i className="menu-icon">📄</i> Pipelines </li>
                    <li> <i className="menu-icon">🖥</i> Sandbox </li>
                    <li> <i className="menu-icon">💻</i> Code </li>
                    <li> <i className="menu-icon">📊</i> Activity </li>
                </ul>
                <div className="sidebar-footer">
                    <i className="footer-icon">🔍</i> Search
                    <br />
                    <i className="footer-icon">💬</i> Support
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <div className="main-header">
                    <h3>Monthly Payment Status</h3>
                </div>
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
        </div>
    );
};
export default Dashboard;
