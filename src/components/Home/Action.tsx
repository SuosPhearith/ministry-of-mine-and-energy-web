// pages/index.tsx
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const images = [
  {
    src: "/images/mme/activity1.png",
    date: "06 មេសា ២០២៣",
    description:
      "ការជួបកិច្ចការផ្លូវការជាមួយគណៈប្រតិភូការជួបកិច្ចការផ្លូវការជាមួយគណៈប្រតិភូការជួបកិច្ចការផ្លូវការជាមួយគណៈប្រតិភូ",
  },
  {
    src: "/images/mme/activity2.png",
    date: "06 មេសា ២០២៣",
    description: "សម្របសម្រួលជាមួយនឹងតំណាងADB...",
  },
  {
    src: "/images/mme/activity3.png",
    date: "06 មេសា ២០២៣",
    description: "សម្របសម្រួលជាមួយនឹងតំណាងADB...",
  },
  {
    src: "/images/mme/activity4.png",
    date: "06 មេសា ២០២៣",
    description: "សម្របសម្រួលជាមួយនឹងតំណាងADB...",
  },
  {
    src: "/images/mme/activity5.png",
    date: "06 មេសា ២០២៣",
    description: "សម្របសម្រួលជាមួយនឹងតំណាងADB...",
  },
  {
    src: "/images/mme/activity1.png",
    date: "06 មេសា ២០២៣",
    description: "ការជួបកិច្ចការផ្លូវការជាមួយគណៈប្រតិភូ...",
  },
];

const Action: React.FC = () => {
  return (
    <section className="flex w-full items-center justify-center bg-[#EDF7FF] font-light">
      <div className="bg-gray-100 w-[80%] p-6 pb-[200px] max-[1000px]:pb-[100px]">
        <h1 className="py-[100px] pb-10 text-center text-3xl text-primary">
          សកម្មភាពថ្នាក់ដឹកនាំ
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-sm bg-white shadow-md"
            >
              <Image
                src={image.src}
                alt={image.description}
                className="h-48 w-full object-cover"
                layout="responsive"
                width={500}
                height={300}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 pt-30 text-white hover:from-primary">
                <div className="text-sm">
                  <FontAwesomeIcon icon={faCalendar} className="me-3" />
                  {image.date}
                </div>
                <div className="max-lines-2 text-lg">{image.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Action;
