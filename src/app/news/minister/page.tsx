import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Minister from "@/components/News/minister/Minister";
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
