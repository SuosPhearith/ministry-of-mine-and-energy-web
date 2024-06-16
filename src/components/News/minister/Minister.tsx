import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const ministerActions = [
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

const Minister: React.FC = () => {
  return (
    <section className="relative flex w-full items-center justify-center bg-white font-light">
      {/* Background Images */}
      <div className="absolute inset-0 bg-kbach-1 bg-custom-size bg-left-bottom bg-no-repeat"></div>
      <div className="absolute inset-0 bg-kbach-2 bg-right-top bg-no-repeat"></div>

      <div className="relative flex w-4/5 flex-col justify-between py-12 max-md:py-20">
        <div className="flex w-full flex-col ">
          <div className="flex items-center justify-between  max-[700px]:mb-5 max-[700px]:flex-col">
            <h1 className="py-5 text-4xl font-semibold text-primary">
              សកម្មភាពថ្នាក់ដឹកនាំ
            </h1>
          </div>
          <div className="h-[1px] bg-primary"></div>
          <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ministerActions.map((image, index) => (
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
      </div>
    </section>
  );
};

export default Minister;
