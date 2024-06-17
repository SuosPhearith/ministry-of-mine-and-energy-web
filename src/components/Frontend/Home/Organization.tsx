import React from "react";
import Image from "next/image";
const parters = [
  { image: "/images/mme/Partner 1.png" },
  { image: "/images/mme/Partner 2.png" },
  { image: "/images/mme/Partner 3.png" },
  { image: "/images/mme/Partner 4.png" },
  { image: "/images/mme/Partner 5.png" },
  { image: "/images/mme/Partner 6.png" },
  { image: "/images/mme/Partner 7.png" },
  { image: "/images/mme/Partner 8.png" },
  { image: "/images/mme/Partner 9.png" },
];

const Organization: React.FC = () => {
  return (
    <section className="flex w-full items-center justify-center bg-[#EDF7FF] py-[50px]">
      <div className="w-[80%]">
        <h1 className="flex w-full py-5 pb-10 text-3xl text-primary">
          អង្គភាព​ក្រោមឱវាទ និងដៃគូរអនុវត្ត
        </h1>
        <div className="flex flex-wrap justify-around">
          {parters.map((i, index) => (
            <div className="flex items-center justify-center" key={index}>
              <Image
                src={i.image}
                alt={i.image}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organization;
