import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
};

export default page;
