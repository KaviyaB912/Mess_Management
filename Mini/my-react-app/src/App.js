



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import StudentDetails from './Pages/StudentDetails/StudentDetails';
import QRCodeScannerPage from './Pages/QRCodeScannerPage/QRCodeScannerPage'; // Import the QR code scanner page
import NextPage from './Pages/NextPage/NextPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student-details" element={<StudentDetails />} />
        <Route path="/scanner" element={<QRCodeScannerPage />} /> {/* Add route for QR code scanner */}
        <Route path="/next-page" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;


