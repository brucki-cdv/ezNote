
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./Pages/Home"));
const Register = React.lazy(() => import("./Pages/Register"));
const Login = React.lazy(() => import("./Pages/Login"));

function App() {
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
