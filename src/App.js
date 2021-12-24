import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Personal/dashboard";
import Login from "./Pages/Personal/login";
import Signup from "./Pages/Personal/signup";
import BusinessDashboard from "./Pages/Business/dashboard";
import BusinessLogin from "./Pages/Business/login";
import BusinessSignup from "./Pages/Business/signup";

function App() {
  return (
    <>
      <Routes>
        <Route  path="/*" element={<Dashboard />} />
        <Route  path="/Login" element={ <Login />}/>
        <Route path="/signup" element={<Signup />} />
         <Route  path="/business/*" element={<BusinessDashboard />} />
        <Route  path="/business/Login" element={ <BusinessLogin />}/>
        <Route path="/business/signup" element={<BusinessSignup />} />
      </Routes>
    </>
  );
}
export default App;
