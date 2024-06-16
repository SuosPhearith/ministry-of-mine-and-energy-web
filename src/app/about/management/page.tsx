import Management from "@/components/About/Management/Management";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Management />
      <Footer />
    </main>
  );
};

export default page;
