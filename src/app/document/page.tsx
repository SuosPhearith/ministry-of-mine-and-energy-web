import Document from "@/components/Document/Document";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Document />
      <Footer />
    </main>
  );
};

export default page;
