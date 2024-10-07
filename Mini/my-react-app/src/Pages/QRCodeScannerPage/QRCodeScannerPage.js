

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { QrReader } from 'react-qr-reader';
// import { GooglePayButton } from '@google-pay/button-react';
// import { gpayConfig } from "./googlepay";
// import './Pay.css';

// const QRCodeScannerPage = () => {
//     const [qrData, setQrData] = useState(null);
//     const [isScanned, setIsScanned] = useState(false); // For debouncing
//     const navigate = useNavigate();
//     const searchParams = new URLSearchParams(navigate.search);
//     const month = searchParams.get('month');

//     const handleScan = (data) => {
//         console.log("hiii");
//         if (data && !isScanned) {
//             console.log('QR Data:', data);
//             setQrData(data);
//             setIsScanned(true); // Prevent multiple scans

//             // Navigate to the next page after scanning the QR code
//             navigate(`/next-page`, { state: { qrData: data } });
//         }
//     };

//     const handleError = (err) => {
//         console.error('Scan Error:', err); // Log any errors during scanning
//     };

//     const onLoadPaymentData = (paymentData) => {
//         console.log('Payment Success', paymentData);
//         navigate('/next-page', { state: { qrData, paymentData } });
//     };

//     return (
//         <div className="scanner-page">
//             <div className="scanner-header">
//                 <h3>Pay for {month}</h3>
//             </div>
//             <div className="scanner-content">
//                 <div className="qr-reader-container">
//                     <QrReader
//                         delay={300}
//                         onError={handleError}
//                         onResult={handleScan}
//                         facingMode="user"
//                         style={{ width: '100%', height: '100%' }} // Ensure width and height are set
//                     />
//                 </div>
//                 {qrData && (
//                     <div>
//                         {/* Google Pay button (optional) */}
//                         <GooglePayButton
//                             environment="TEST" // Switch to 'PRODUCTION' when ready
//                             paymentRequest={gpayConfig}
//                             onLoadPaymentData={onLoadPaymentData}
//                         />
                        
//                         {/* Manual navigation button (for testing) */}
//                         <button onClick={() => navigate(`/next-page`, { state: { qrData } })}>
//                             Go to Next Page
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default QRCodeScannerPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';
import { GooglePayButton } from '@google-pay/button-react';
import { gpayConfig } from "./googlepay";
import './Pay.css';

const QRCodeScannerPage = () => {
    const [qrData, setQrData] = useState(null);
    const [isScanned, setIsScanned] = useState(false); // For debouncing
    const [scanError, setScanError] = useState(null); // For handling errors
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(navigate.search);
    const month = searchParams.get('month');

    const handleScan = (result) => {
        if (result?.text && !isScanned) { // Check for text property specifically
            console.log('QR Data:', result.text);
            setQrData(result.text); // Only use the `text` property
            setIsScanned(true); // Prevent multiple scans

            // Navigate to the next page after scanning the QR code
            navigate(`/next-page`, { state: { qrData: result.text } });
        }
    };

    const handleError = (err) => {
        console.error('Scan Error:', err); // Log any errors during scanning
        setScanError("Error scanning QR code. Please try again.");
    };

    const onLoadPaymentData = (paymentData) => {
        console.log('Payment Success', paymentData);
        navigate('/next-page', { state: { qrData, paymentData } });
    };

    return (
        <div className="scanner-page">
            <div className="scanner-header">
                <h3>Pay for {month}</h3>
            </div>
            <div className="scanner-content">
                <div className="qr-reader-container">
                    <QrReader
                        delay={300}
                        onError={handleError}
                        onResult={handleScan} // Handles successful scan
                        facingMode="user"
                        style={{ width: '100%', height: '100%' }} // Ensure width and height are set
                    />
                </div>
                
                {/* Display error if there is one */}
                {scanError && <p style={{ color: 'red' }}>{scanError}</p>}
                
                {qrData && (
                    <div>
                        {/* Google Pay button (optional) */}
                        <GooglePayButton
                            environment="TEST" // Switch to 'PRODUCTION' when ready
                            paymentRequest={gpayConfig}
                            onLoadPaymentData={onLoadPaymentData}
                        />
                        
                        {/* Manual navigation button (for testing) */}
                        <button onClick={() => navigate(`/next-page`, { state: { qrData } })}>
                            Go to Next Page
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QRCodeScannerPage;
