import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Notice } from "../Pages/Notice";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/notices" element={<Notice />}></Route>
    </Routes>
  );
};
