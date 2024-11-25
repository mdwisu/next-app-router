"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-700 mb-6">
          We encountered an unexpected error. Please try again, or contact
          support if the problem persists.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
