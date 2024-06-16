import about from "../../../public/images/mme/Video.png";
import Image from "next/image";
import React from "react";

const Minister: React.FC = () => {
  return (
    <section className="flex w-full items-center justify-center bg-primary text-white">
      <div className="flex w-[80%] justify-between py-[100px] max-[970px]:py-[25px] max-[750px]:flex-col max-[750px]:items-center">
        <div className="flex w-1/2 flex-col max-[970px]:w-full">
          <h1 className="text-md pt-5">ឯកឧត្តម កែវ រតនះ</h1>
          <div className="pb-8 text-2xl">
            ការធ្វើអន្តរកាលថាមពល ការអភិវឌ្ឍវិស័យរ៉ែ និងប្រេងកាត
            កម្ពុជាត្រូវការពារបរិស្ថាន និងការងារអោយប្រជាជនកម្ពុជា
          </div>
        </div>
        <div>
          <Image
            src={about}
            alt="about"
            className="max-w-[350px] max-[1200px]:max-w-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Minister;
