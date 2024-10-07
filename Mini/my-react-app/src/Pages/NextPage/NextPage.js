


// import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './NextPage.css'; 

// const NextPage = () => {
//   const location = useLocation(); 
//   const navigate = useNavigate();
//   const qrData = location.state?.qrData; 
//   const paymentData = location.state?.paymentData; 
  
//   const isUPI = qrData && qrData.startsWith('upi://pay');

//   const handleGoBack = () => {
//     navigate('/'); 
//   };

 
//   const handleUPIRedirect = () => {
//     if (isUPI) {
      
//       window.location.href = qrData;
//     } else {
//       alert("Invalid UPI URL");
//     }
//   };

  
//   useEffect(() => {
//     if (isUPI) {
//       const timer = setTimeout(() => {
//         handleUPIRedirect();
//       }, 3000); 
//       return () => clearTimeout(timer); 
//     }
//   }, [isUPI, qrData]);

//   return (
//     <div className="next-page-container">
//       <h1>Next Page</h1>
//       {/* Show QR data or Payment data if passed */}
//       {qrData ? (
//         <div>
//           <h2 style={{ color: "green" }}>QR Data Scanned:</h2>
//           <p>{qrData}</p>
//           {isUPI ? (
//             <div>
//               <button onClick={handleUPIRedirect}>Proceed to Pay</button>
//               <p>Redirecting to UPI app...</p> {/* Message displayed while waiting */}
//             </div>
//           ) : (
//             <p>QR code does not contain a valid UPI link.</p>
//           )}
//         </div>
//       ) : paymentData ? (
//         <div>
//           <h2>Payment Successful!</h2>
//           <p>Transaction ID: {paymentData.transactionId}</p>
//           <p>Amount: {paymentData.amount}</p>
//         </div>
//       ) : (
//         <p>No data to display</p>
//       )}

//       <button onClick={handleGoBack}>Go Back</button>
//     </div>
//   );
// };

// export default NextPage;


import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './NextPage.css'; // Optional: for styling

const NextPage = () => {
  const location = useLocation(); // Retrieve the state passed to this page
  const navigate = useNavigate();
  const qrData = location.state?.qrData; // Access the QR code data
  const paymentData = location.state?.paymentData; // Access payment data

  // Check if qrData contains a valid UPI link
  const isUPI = qrData && qrData.startsWith('upi://pay');

  // Function to handle UPI redirection
  const handleUPIRedirect = () => {
    if (isUPI) {
      // Redirect to the UPI payment app (GPay, PhonePe, etc.)
      // window.location.href = qrData;
      window.open(qrData, '_self'); 
    } else {
      alert("Invalid UPI URL. Cannot proceed to payment.");
    }
  };

  // Function to handle Go Back button
  const handleGoBack = () => {
    navigate('/'); // Redirects back to the home page
  };

  // Function to extract and display relevant UPI data
  const extractUPIData = (upiUrl) => {
    const urlParams = new URLSearchParams(upiUrl.replace('upi://pay?', ''));
    return {
      payee: urlParams.get('pn'), // Payee name
      payeeVPA: urlParams.get('pa'), // Virtual Payment Address
      amount: urlParams.get('am'), // Amount
    };
  };

  const upiData = isUPI ? extractUPIData(qrData) : null;

  return (
    <div className="next-page-container">
      <h1>Next Page</h1>
      
      {qrData ? (
        <div className="qr-data-section">
          <h2 style={{ color: "green" }}>UPI Payment Details</h2>
          {isUPI && upiData ? (
            <div className="upi-details">
              <p><strong>Payee Name:</strong> {upiData.payee || 'N/A'}</p>
              <p><strong>Payee VPA:</strong> {upiData.payeeVPA || 'N/A'}</p>
              <p><strong>Amount:</strong> {upiData.amount ? `₹${upiData.amount}` : 'N/A'}</p>
              <button onClick={handleUPIRedirect} className="proceed-btn">
                Proceed to Pay
              </button>
            </div>
          ) : (
            <p>QR code does not contain valid UPI payment information.</p>
          )}
        </div>
      ) : paymentData ? (
        <div className="payment-data-section">
          <h2>Payment Successful!</h2>
          <p><strong>Transaction ID:</strong> {paymentData.transactionId}</p>
          <p><strong>Amount:</strong> ₹{paymentData.amount}</p>
        </div>
      ) : (
        <p>No data to display</p>
      )}

      <button onClick={handleGoBack} className="back-btn">Go Back</button>
    </div>
  );
};

export default NextPage;
