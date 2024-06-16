import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import about from "../../../public/images/mme/home/about/about.png";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="relative flex w-full items-center justify-center bg-white text-lg font-light">
      {/* Background Images */}
      <div className="absolute inset-0 bg-kbach-1 bg-custom-size bg-left-bottom bg-no-repeat"></div>
      <div className="absolute inset-0 bg-kbach-2 bg-right-top bg-no-repeat"></div>

      <div className="relative flex w-[80%] justify-between py-[150px] max-[970px]:py-[75px]">
        <div className="flex w-1/2 flex-col max-[970px]:w-full">
          <h1 className="py-5 text-4xl font-normal text-primary">
            ក្រសួងរ៉ែ និងថាមពល
          </h1>
          <div className="pb-8 text-black">
            បំពេញមុខងារជាសេនាធិការអោយរាជរដ្ធាភិបាល លើបេសសកម្មដឹកនាំ
            និងគ្រប់គ្រងលើវិស័យរ៉ែ និងថាមពលរួមមាន ៖
          </div>
          <div className="mb-9 flex w-[70%] justify-between text-black">
            <div className="">
              <div className="py-2">
                <FontAwesomeIcon icon={faCircle} className="me-3 w-1" />
                ប្រេងកាត
              </div>
              <div className="py-2">
                <FontAwesomeIcon icon={faCircle} className="me-3 w-1" />
                ឧស្ម័ន
              </div>
              <div className="py-2">
                <FontAwesomeIcon icon={faCircle} className="me-3 w-1" />
                បរមាណូសុីវិល
              </div>
            </div>
            <div>
              <div className="py-2">
                <FontAwesomeIcon icon={faCircle} className="me-3 w-1" />
                អគ្គិសនី
              </div>
              <div className="py-2">
                <FontAwesomeIcon icon={faCircle} className="me-3 w-1" />
                ធនធានរ៉ែ
              </div>
              <div className="py-2">
                <FontAwesomeIcon icon={faCircle} className="me-3 w-1" />
                វិទ្យុសកម្ម
              </div>
            </div>
          </div>
          <div className="flex w-[200px] cursor-pointer items-center justify-center rounded-br-md rounded-tl-md bg-primary p-3 text-white hover:bg-preprimary">
            ស្វែងយល់បន្ថែម
          </div>
        </div>
        <div>
          <Image
            src={about}
            alt="about"
            className="max-w-[450px] animate-card-slide transition duration-500 hover:scale-105 max-[1200px]:max-w-[400px] max-[970px]:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
