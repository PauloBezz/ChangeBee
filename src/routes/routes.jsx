import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/index.jsx";
import { Login, Register } from "../pages/Login/index.jsx";
import { ForgotPassword } from "../pages/ForgotPassword";
import { ErrorPage } from "../pages/ErrorPage/index.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}