import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/signup";
import Login from "./Pages/login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="signup/*" element={<Signup />} />
          <Route path="login/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
