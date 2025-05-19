import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { SignUp } from "./pages/SignUp";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} /> {/* Alternative path */}
        <Route path="/home/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
