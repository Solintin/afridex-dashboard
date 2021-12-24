import { Route, Routes } from "react-router-dom";
import Login from "../../Components/Login";

const login = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default login;
