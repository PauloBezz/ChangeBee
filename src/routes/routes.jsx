import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/index.jsx";
import { Login, Register } from "../pages/Login/index.jsx"
import { ErrorPage } from "../pages/ErrorPage/index.jsx"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/"/>
        <Route Component={Login} path="/login"/>
        <Route Component={Register} path="/register"/>
        <Route Component={ErrorPage} path="*"/>
      </Routes>
    </BrowserRouter>
  );
}