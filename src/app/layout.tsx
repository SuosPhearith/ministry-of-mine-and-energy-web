"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import Navbar from "@/components/Frontend/Navbar/Navbar";
import Footer from "@/components/Frontend/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="font-sans">
        {loading ? (
          <Loader />
        ) : (
          <div className=" dark:bg-boxdark-2 dark:text-bodydark">
            <Navbar />
            {children}
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
