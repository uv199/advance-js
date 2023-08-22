import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Service() {
  let navigate = useNavigate();
  return (
    <>
      <h1>Service</h1>
      <button onClick={() => navigate("/")}>go to home</button>
      <Outlet />
    </>
  );
}
