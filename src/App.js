import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/dashboard";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route  path="/*" element={<Dashboard />} />
        <Route  path="/Login" element={ <Login />}/>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
export default App;
