import React, { useEffect } from "react";

//pages
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Category from "./components/category/category";
import Restaurants from "./components/restaurants/restaurants";
import Products from "./components/products/products";

import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <div></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:categoryId" element={<Restaurants />} />
        <Route path="/restaurant/:restaurantId" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
