/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = ({ disableNavbar }: { disableNavbar: string[] }) => {
  const pathname = usePathname();
  const router = useRouter();

  const { data: session, status }: { data: any; status: string } = useSession();

  if (disableNavbar.includes(pathname)) {
    return null;
  }

  return (
    <div className="w-full flex justify-between items-center bg-gray-800 p-4">
      <div className="text-white text-lg font-bold">My Website</div>
      <div className="flex space-x-4 items-center">
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
      </div>
      <div>
        <div className="ml-8 space-x-4 flex">
          {status === "authenticated" ? (
            <div className="flex">
              <Image
                src="/images/profile.png"
                alt="profile"
                width={100}
                height={100}
                className="w-10 h-10 rounded-full"
                priority
              />
              <h4 className="text-white mr-5">{session?.user?.name}</h4>
              <button className="text-white" onClick={() => signOut()}>
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className={`text-white hover:text-gray-300 ${
                pathname === "/login" ? "font-bold" : ""
              }`}
            >
              Login
            </button>
          )}
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
