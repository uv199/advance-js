import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ Component }) {
  const navigate = useNavigate();
  useEffect(() => {
    let data = localStorage.getItem("user");
    let normalData = JSON.parse(data);

    if (normalData && Object.keys(normalData).length === 0) {
      navigate("/anauthorized");
    }
  });
  return <>{Component}</>;
}
