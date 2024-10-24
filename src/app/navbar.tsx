"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = ({ disableNavbar }: { disableNavbar: string[] }) => {
  const pathname = usePathname();
  const router = useRouter();

  if (disableNavbar.includes(pathname)) {
    return null; // Tidak menampilkan Navbar di halaman login dan register
  }

  return (
    <div className="w-full flex justify-between items-center bg-gray-800 p-4">
      <div className="text-white text-lg font-bold">My Website</div>
      <div className="flex space-x-4 items-center">
        {/* Menu utama */}
        <div className="space-x-4">
          <Link
            href="/home"
            className={`text-white hover:text-gray-300 ${
              pathname === "/home" ? "font-bold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/product"
            className={`text-white hover:text-gray-300 ${
              pathname === "/product" ? "font-bold" : ""
            }`}
          >
            Product
          </Link>
          <Link
            href="/about"
            className={`text-white hover:text-gray-300 ${
              pathname === "/about" ? "font-bold" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/about/profile"
            className={`text-white hover:text-gray-300 ${
              pathname === "/about/profile" ? "font-bold" : ""
            }`}
          >
            Profile
          </Link>
          <Link
            href="/contact"
            className={`text-white hover:text-gray-300 ${
              pathname === "/contact" ? "font-bold" : ""
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Menu Login dan Register dengan jarak terpisah */}
      </div>
      <div>
        <div className="ml-8 space-x-4">
          <button
            onClick={() => router.push("/login")}
            className={`text-white hover:text-gray-300 ${
              pathname === "/login" ? "font-bold" : ""
            }`}
          >
            Login
          </button>
          <button
            onClick={() => router.push("/register")}
            className={`text-white hover:text-gray-300 ${
              pathname === "/register" ? "font-bold" : ""
            }`}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
