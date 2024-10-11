import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MedicalManagement from "./pages/MedicalManagement/MedicalManagement";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/medical-management" element={<MedicalManagement />} />
        {/* 다른 라우트들... */}
      </Routes>
    </Router>
  );
};

export default App;
