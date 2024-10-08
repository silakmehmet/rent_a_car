import CustomNavbar from "./components/Navbar/Navbar";
import Login from "./components/Registration/Login";
import Signup from "./components/Registration/Signup";
import CarDetailsPage from "./pages/Cars/CarDetailsPage";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cars" element={<CarDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
