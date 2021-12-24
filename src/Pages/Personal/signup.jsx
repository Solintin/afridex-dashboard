import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../../Components/Signup";

const signup = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default signup;
