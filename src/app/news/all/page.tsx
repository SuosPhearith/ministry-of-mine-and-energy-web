import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import All from "@/components/News/all/All";
import React from "react";

const page: React.FC = () => {
  return (
    <main>
      <Navbar />
      <All />
      <Footer />
    </main>
  );
};

export default page;
