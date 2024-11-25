import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./navbar";
import AuthProvider from "./AuthProvider";
import { Poppins } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Home - MDwiSu",
  description: "Next App Router with Tailwind CSS",
  openGraph: {
    
  }
};
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const disableNavbar = ["/login", "/register", "/not-found"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}
      >
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <AuthProvider>
          <Navbar disableNavbar={disableNavbar} />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
