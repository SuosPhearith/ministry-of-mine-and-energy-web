import React from "react";
import Image from "next/image";
import logo from "../../../public/images/mme/MME_Logo.png"; // Make sure to adjust the path to your image

const Service = () => {
  const items = [
    { id: 1, name: "អាជ្ញាប័ណ្ណធានទឹក" },
    { id: 2, name: "អាជ្ញាប័ណ្ណធានទឹក" },
    { id: 3, name: "អាជ្ញាប័ណ្ណធានទឹក" },
    { id: 4, name: "អាជ្ញាប័ណ្ណធានទឹក" },
    { id: 5, name: "អាជ្ញាប័ណ្ណធានទឹក" },
    { id: 6, name: "អាជ្ញាប័ណ្ណធានទឹក" },
    { id: 7, name: "អាជ្ញាប័ណ្ណធានទឹក" },
    { id: 8, name: "អាជ្ញាប័ណ្ណធានទឹក" },
  ];

  return (
    <section className="flex w-full items-center justify-center bg-[#EDF7FF] py-[100px]">
      <div className="w-[80%]">
        <h1 className="py-5 pb-10 text-center text-4xl text-primary">
          សេវាសាធារណៈ
        </h1>
        <div className="grid grid-cols-1 gap-6 font-light md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative flex transform flex-col items-center rounded-lg border bg-white p-4 shadow-lg transition duration-500 hover:scale-105 hover:shadow-xl "
            >
              <div className="mb-4 flex justify-center">
                <Image src={logo} alt={item.name} width={100} height={100} />
              </div>
              <div className="text-center text-lg text-black">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
