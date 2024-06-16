import Mission from "@/components/About/Mission/Mission";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="font-light">
      <Navbar />
      <Mission />
      <Footer />
    </main>
  );
};

export default page;
