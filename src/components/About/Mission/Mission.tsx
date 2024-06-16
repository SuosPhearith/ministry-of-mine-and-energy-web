import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dam4 from "../../../../public/images/mme/dam4.jpeg";
import dam5 from "../../../../public/images/mme/dam5.jpg";
import building from "../../../../public/images/mme/MME-Building.png";
import he1 from "../../../../public/images/mme/HE1.jpg";
import he2 from "../../../../public/images/mme/HE2.jpg";
import Image from "next/image";

const Mission: React.FC = () => {
  // Ensure you have FontAwesome set up

  return (
    <section className="relative flex w-full items-center justify-center bg-white">
      {/* Background Images */}
      <div className="absolute inset-0 bg-kbach-1 bg-custom-size bg-left-bottom bg-no-repeat"></div>
      <div className="absolute inset-0 bg-kbach-2 bg-right-top bg-no-repeat"></div>

      <div className="relative flex w-4/5 flex-col justify-between py-12 max-md:py-20">
        <div className="flex w-full flex-col">
          <h1 className="py-5 text-4xl font-semibold text-primary">
            សាវដា និងបេសកម្ម
          </h1>
          <div className="mb-5">
            <div className="-mx-2 flex flex-wrap">
              <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                <div className="flex h-32 items-center justify-center bg-cyan-400 text-white md:h-64">
                  <Image
                    src={dam4}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                <div className="flex h-32 items-center justify-center bg-cyan-400 text-white md:h-64">
                  <Image
                    src={building}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                <div className="flex h-32 items-center justify-center bg-cyan-400 text-white md:h-64">
                  <Image
                    src={dam5}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pb-8 leading-8 text-black">
            សួស្ដីជនជាតិខ្មែរ! បច្ចុប្បន់គឺជាថ្ងៃទី ១៦ មិថុនា ឆ្នាំ ២០២៤។
            អាកាសធាតុនៅភ្នំពេញ ស្រស់ស្អាត មានបំភ្លឺថ្ងៃភ្លឺច្រាស។
            តើលោកអ្នកចង់ដឹងអ្វីអំពីប្រទេសកម្ពុជារបស់យើង ឬទេ? មានប្រាសាទប Angkor
            Wat ដ៏ល្បីល្បាយ អាកាសធាតុនៅភ្នំពេញ ស្រស់ស្អាត
            មានបំភ្លឺថ្ងៃភ្លឺច្រាស។ តើលោកអ្នកចង់ដឹងអ្វីអំពីប្រទេសកម្ពុជារបស់យើង
            ឬទេ? មានប្រាសាទប Angkor Wat ដ៏ល្បីល្បាយអាកាសធាតុនៅភ្នំពេញ ស្រស់ស្អាត
            មានបំភ្លឺថ្ងៃភ្លឺច្រាស។ តើលោកអ្នកចង់ដឹងអ្វីអំពីប្រទេសកម្ពុជារបស់យើង
            ឬទេ? មានប្រាសាទប Angkor Wat ដ៏ល្បីល្បាយ
          </div>
          <div className="pb-8 text-2xl font-semibold leading-8 text-primary">
            បេសកម្មនិងរចនាសម្ព័ន្ធ
          </div>
          <div className="pb-8 text-black">
            បំពេញមុខងារជាសេនាធិការអោយរាជរដ្ធាភិបាល លើបេសសកម្មដឹកនាំ
            និងគ្រប់គ្រងលើវិស័យរ៉ែ និងថាមពលរួមមាន ៖
          </div>
          <div className="mb-9 flex w-full max-w-md justify-between text-black">
            <div>
              <div className="py-2">
                <FontAwesomeIcon icon={faCircle} className="mr-3 w-1" />
                ប្រេងកាត
              </div>
              <div className="py-2">
                <FontAwesomeIcon icon={faCircle} className="mr-3 w-1" />
                ប្រេងកាត
              </div>
              <div className="py-2">
                <FontAwesomeIcon icon={faCircle} className="mr-3 w-1" />
                ប្រេងកាត
              </div>
            </div>
            <div>
              <div className="py-2">
                <FontAwesomeIcon icon={faCircle} className="mr-3 w-1" />
                ប្រេងកាត
              </div>
              <div className="py-2">
                <FontAwesomeIcon icon={faCircle} className="mr-3 w-1" />
                ប្រេងកាត
              </div>
              <div className="py-2">
                <FontAwesomeIcon icon={faCircle} className="mr-3 w-1" />
                ប្រេងកាត
              </div>
            </div>
          </div>
          <div className="pb-8 text-2xl font-semibold leading-8 text-primary">
            រដ្ឋមន្ត្រី
          </div>
          <div className="flex flex-wrap justify-between font-normal text-white">
            <div className="mb-4 flex w-full flex-col items-center justify-center rounded-xl bg-primary p-11 hover:shadow-xl md:w-[48%]">
              <div className="h-40 w-40 rounded-full border-[6px] border-warning">
                <Image
                  src={he1}
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="mt-2">ឯកឧត្តម កែវ រតនះ</div>
              <div className="mt-2">រដ្ឋមន្ត្រីក្រសូងរ៉ែ និងថាមពល</div>
              <div className="mt-2">២០២៣ - បច្ចុប្បន្ន</div>
            </div>
            <div className="mb-4 flex w-full flex-col items-center justify-center rounded-xl bg-primary p-11 hover:shadow-xl md:w-[48%]">
              <div className="h-40 w-40 rounded-full border-[6px] border-warning">
                <Image
                  src={he2}
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="mt-2">ឯកឧត្តម ស៊ុយ សែម</div>
              <div className="mt-2">រដ្ឋមន្ត្រីក្រសូងរ៉ែ និងថាមពល</div>
              <div className="mt-2">២០១៣ - ២០២៣</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
