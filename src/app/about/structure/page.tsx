import Mission from "@/components/About/Mission/Mission";
import Structure from "@/components/About/Structure/Structure";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <main>
      <Navbar />
      <Structure />
      <Footer />
    </main>
  );
};

export default page;
