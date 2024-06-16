import Minister from "@/components/About/Minister/Minister";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Minister />
      <Footer />
    </main>
  );
};

export default page;
