import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
