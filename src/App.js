import "./App.css";
import React from "react";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import HallInfo from "./pages/HallInfo/HallInfo";
import Photos from "./pages/HallInfo/Photos";
import Booking from "./pages/Booking/Booking";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HallInfo />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
