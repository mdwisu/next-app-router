"use client";
import React from "react";

const AdminProductPage = () => {
  const [status, setStatus] = React.useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=product&secret=123",
      {
        method: "POST",
      }
    );
    if (res.status === 401) {
      setStatus("invalid secret");
    } else {
      setStatus("success");
    }
  };
  return (
    <div>
      <h1>{status}</h1>
      <button onClick={() => revalidate()}>Revalidate</button>
    </div>
  );
};

export default AdminProductPage;
