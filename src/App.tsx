import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import Temp from "./pages/Temp";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} /> {/* Alternative path */}
        <Route path="/temp" element={<Temp />} /> {/* Temp path */}
      </Routes>
    </Router>
  );
};

export default App;
