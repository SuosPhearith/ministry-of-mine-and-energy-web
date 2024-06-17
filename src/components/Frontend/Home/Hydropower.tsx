/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import dam1 from "../../../../public/images/mme/dam1.jpeg";
import dam2 from "../../../../public/images/mme/dam2.jpeg";
import dam3 from "../../../../public/images/mme/dam3.jpeg";
import dam4 from "../../../../public/images/mme/dam4.jpeg";

const Hydropower = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [dam1, dam2, dam3, dam4]; // Replace with your actual images

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex w-full items-center justify-center bg-[#ffff] py-[100px]">
      <div className="w-[80%]">
        <h1 className="py-5 pb-10 text-center text-4xl text-primary">
          វារីអគ្គិសនីកម្ពុជា
        </h1>
        <div
          id="controls-carousel"
          className="relative w-full bg-primary"
          data-carousel="static"
        >
          {/* Carousel wrapper */}
          <div className="relative h-[600px] overflow-hidden rounded-lg max-[1000px]:h-[500px] max-[800px]:h-[300px] max-[500px]:h-[200px]">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={img}
                  layout="fill"
                  objectFit="cover"
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
              <svg
                className="h-4 w-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            onClick={handleNext}
            aria-label="Next"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
              <svg
                className="h-4 w-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hydropower;
