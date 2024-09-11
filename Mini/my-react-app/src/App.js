
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import StudentDetails from './Pages/StudentDetails/StudentDetails';
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/student-details' element={<StudentDetails/>}/> 
      </Routes>
    </Router>
  );
}

export default App;

