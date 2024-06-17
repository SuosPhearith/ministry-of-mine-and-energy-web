import React from "react";
import { Image } from "antd";

const structure = "/images/mme/Structure.png";
const Structure: React.FC = () => {
  return (
    <section className="relative flex w-full items-center justify-center bg-white">
      {/* Background Images */}
      <div className="absolute inset-0 bg-kbach-1 bg-custom-size bg-left-bottom bg-no-repeat"></div>
      <div className="absolute inset-0 bg-kbach-2 bg-right-top bg-no-repeat"></div>

      <div className="relative flex w-4/5 flex-col justify-between py-12 max-md:py-20">
        <div className="flex w-full flex-col">
          <h1 className="py-5 text-4xl font-semibold text-primary">
            រចនាសម្ព័ន្ធ
          </h1>
          <div className="h-[2px] bg-primary"></div>
        </div>
        <div className="mt-8 flex w-full justify-center">
          <div className="w-5/6">
            <Image
              src={`${structure}`}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;
