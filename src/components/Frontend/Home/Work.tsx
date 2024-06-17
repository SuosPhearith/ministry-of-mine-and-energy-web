import React from "react";
import Image from "next/image";

import card1 from "../../../../public/images/mme/Carousel1.png";
import card2 from "../../../../public/images/mme/Carousel2.png";
import card3 from "../../../../public/images/mme/Carousel3.png";
import card4 from "../../../../public/images/mme/Carousel4.png";
import card5 from "../../../../public/images/mme/Carousel5.png";
import Carousel from "./Carousel/Carousel";

const imagesItems = [
  <Image
    className="h-full w-full object-cover"
    src={card1}
    alt="teste"
    key={1}
  />,
  <Image
    className="h-full w-full object-cover"
    src={card2}
    alt="teste"
    key={2}
  />,
  <Image
    className="h-full w-full object-cover"
    src={card3}
    alt="teste"
    key={3}
  />,
  <Image
    className="h-full w-full object-cover"
    src={card4}
    alt="teste"
    key={4}
  />,
  <Image
    className="h-full w-full object-cover"
    src={card5}
    alt="teste"
    key={5}
  />,
];

const Work: React.FC = () => {
  return (
    <div className="bg-bg w-screen overflow-hidden bg-white text-white">
      <main className="flex w-full flex-1 flex-col items-center justify-center pb-[200px] text-center max-[1000px]:pb-[100px]">
        <h1 className="mb-8 py-5 pt-[100px] text-4xl text-primary">
          ការងារអទិភាព
        </h1>
        <Carousel items={imagesItems} />
      </main>
    </div>
  );
};

export default Work;
