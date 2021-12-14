import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/signup";
import Login from "./Pages/login";
import Dashboard from "./Pages/dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="signup/*" element={<Signup />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="login/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
