import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Post";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
