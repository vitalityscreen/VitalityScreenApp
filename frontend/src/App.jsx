
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UploadResults from "./pages/UploadResults";
import TodayActions from "./pages/TodayActions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<UploadResults />} />
        <Route path="/actions" element={<TodayActions />} />
      </Routes>
    </Router>
  );
}

export default App;
