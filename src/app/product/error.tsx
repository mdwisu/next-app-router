// app/error.tsx
"use client"; // Perlu menggunakan "use client" untuk menangani error di komponen ini

import { useEffect } from "react";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service (opsional)
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        Oops! Something went wrong
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        {error.message || "An unexpected error has occurred."}
      </p>

      {/* Tombol untuk refresh atau mencoba kembali */}
      <button
        onClick={() => reset()} // Memanggil fungsi reset untuk mencoba lagi
        className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
      >
        Try Again
      </button>

      <p className="mt-4 text-sm text-gray-500">
        If the problem persists, please contact support.
      </p>
    </div>
  );
};

export default ErrorPage;
