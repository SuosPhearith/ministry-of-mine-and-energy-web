import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Service from "@/components/Service/Service";
import React from "react";

const page: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Service />
      <Footer />
    </main>
  );
};

export default page;
