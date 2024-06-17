import Image from "next/image";
import React from "react";
import minister from "../../../../../public/images/mme/HE1.jpg";
import user from "../../../../../public/images/mme/user.png";

const users = [
  { id: 1, name: "Name" },
  { id: 1, name: "Name" },
  { id: 1, name: "Name" },
  { id: 1, name: "Name" },
];

const Management: React.FC = () => {
  return (
    <section className="relative flex w-full items-center justify-center bg-white">
      {/* Background Images */}
      <div className="absolute inset-0 bg-kbach-1 bg-custom-size bg-left-bottom bg-no-repeat"></div>
      <div className="absolute inset-0 bg-kbach-2 bg-right-top bg-no-repeat"></div>

      <div className="relative flex w-full flex-col items-center  py-12 max-md:py-20">
        <div className="flex w-4/5 flex-col">
          <h1 className="py-5 text-4xl font-semibold text-primary">
            ថ្នាក់ដឹកនាំ
          </h1>
        </div>
        <div className="mt-5 flex w-full flex-col items-center justify-between bg-primary py-6  text-white max-[780px]:flex-col">
          <div className="h-[300px] w-[300px] rounded-full border-[10px] border-warning bg-red max-[720px]:h-[200px] max-[720px]:w-[200px]">
            <Image
              src={minister}
              alt=""
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="my-3 text-2xl">
            ឯកឧត្តម{" "}
            <span className="text-3xl max-[720px]:text-2xl">កែវ រតនះ</span>
          </div>
          <div className="text-2xl max-[720px]:text-xl">
            រដ្ឋមន្ត្រីក្រសូងរ៉ែ និងថាមពល
          </div>
        </div>
        <div className="mb-9 flex w-full flex-col items-center justify-center ">
          <h1 className="my-5 mb-11 text-4xl text-primary max-[720px]:text-3xl">
            រដ្ឋលេខាធិកា
          </h1>
          <div className="flex w-full flex-wrap justify-center gap-6 sm:w-4/5 sm:justify-between">
            {users.map((u) => (
              <div className="flex flex-col items-center" key={u.id}>
                <div className="h-[200px] w-[200px] rounded-full border-[5px] border-primary max-[720px]:h-[150px] max-[720px]:w-[150px]">
                  <Image
                    src={user}
                    alt=""
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <h3 className="mt-3 text-2xl text-black max-[720px]:text-xl">
                  {u.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-9 flex w-full flex-col items-center justify-center ">
          <h1 className="my-5 mb-11 text-4xl text-primary max-[720px]:text-3xl">
            អនុរដ្ឋលេខាធិកា
          </h1>
          <div className="flex w-full flex-wrap justify-center gap-6 sm:w-4/5 sm:justify-between">
            {users.map((u) => (
              <div className="flex flex-col items-center" key={u.id}>
                <div className="h-[200px] w-[200px] rounded-full border-[5px] border-primary max-[720px]:h-[150px] max-[720px]:w-[150px]">
                  <Image
                    src={user}
                    alt=""
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <h3 className="mt-3 text-2xl text-black max-[720px]:text-xl">
                  {u.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;
