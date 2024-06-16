import React from "react";

export interface CarouselIndicatorProps {
  activeIndex: number;
  length: number;
  maxIndicatorVisible?: number;
  onSetActiveIndex: (index: number) => void;
}

export default function CarouselIndicator({
  activeIndex,
  length,
  maxIndicatorVisible = 5,
  onSetActiveIndex,
}: CarouselIndicatorProps) {
  const maxIndicator =
    length > maxIndicatorVisible ? maxIndicatorVisible : length;

  return (
    <div className="carousel-indicator">
      {Array.from(Array(maxIndicator), (_, index) => {
        return (
          <div
            key={index}
            className={`carousel-indicator-dots mt-10
            ${activeIndex === index ? "h-4 w-4 rounded-[50%] bg-primary opacity-100" : "bg-gray-400 h-4 w-4 rounded-[50%] bg-slate-400"}`}
            onClick={() => {
              onSetActiveIndex(index);
            }}
          ></div>
        );
      })}
    </div>
  );
}
