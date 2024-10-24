import Link from "next/link";
import React from "react";

const LayoutAbout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {/* <nav className="fixed left-0 top-10 z-10 h-screen w-60 bg-gray-800">
        <ul className="text-white px-5 py-5">
          <li>home</li>
          <li>about</li>
          <li>profile</li>
        </ul>
      </nav> */}
      <div className="flex">
        <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
          <h2 className="text-lg font-bold mb-4">Sidebar</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-300">
                home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                about
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                profile
              </Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
};

export default LayoutAbout;
