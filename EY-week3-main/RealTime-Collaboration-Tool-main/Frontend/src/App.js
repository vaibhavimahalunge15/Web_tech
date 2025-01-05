import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Editor from "./components/Editor";
import Login from "./components/Login"; // Ensure this matches the exact file name

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor/:documentId" element={<Editor />} />
      </Routes>
    </Router>
  );
};

export default App;
