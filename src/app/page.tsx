import Footer from "@/components/Footer/Footer";
import About from "@/components/Home/About";
import Action from "@/components/Home/Action";
import Carousel from "@/components/Home/Carousel";
import Hydropower from "@/components/Home/Hydropower";
import Minister from "@/components/Home/Minister";
import Organization from "@/components/Home/Organization";
import Service from "@/components/Home/Service";
import Work from "@/components/Home/Work";
import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "ក្រសួងរ៉ែ និងថាមពល",
  description: "MME - Website",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Carousel />
      <About />
      <Minister />
      <Service />
      <Work />
      <Action />
      <Hydropower />
      <Organization />
      <Footer />
    </main>
  );
}
