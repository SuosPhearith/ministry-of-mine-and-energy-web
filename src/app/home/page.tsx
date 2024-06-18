import About from "@/components/Frontend/Home/About";
import Action from "@/components/Frontend/Home/Action";
import Carousel from "@/components/Frontend/Home/Carousel";
import Hydropower from "@/components/Frontend/Home/Hydropower";
import Minister from "@/components/Frontend/Home/Minister";
import Organization from "@/components/Frontend/Home/Organization";
import Service from "@/components/Frontend/Home/Service";
import Work from "@/components/Frontend/Home/Work";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "ក្រសួងរ៉ែ និងថាមពល",
  description: "MME - Website",
};

export default function Home() {
  return (
    <main>
      <Carousel />
      <About />
      <Minister />
      <Service />
      <Work />
      <Action />
      <Hydropower />
      <Organization />
    </main>
  );
}
