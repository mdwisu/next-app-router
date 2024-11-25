"use client";
import React from "react";

const AdminProductPage = () => {
  const [status, setStatus] = React.useState("");
  const revalidate = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/revalidate?tag=product&secret=123`,
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
    <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
      <h1>{status}</h1>
      <button onClick={() => revalidate()}>Revalidate</button>
    </div>
  );
};

export default AdminProductPage;
