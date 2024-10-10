import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MedicalManagement from "./pages/MedicalManagement/MedicalManagement";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/medical-management" component={MedicalManagement} />
        {/* 다른 라우트들... */}
      </Switch>
    </Router>
  );
};

export default App;
