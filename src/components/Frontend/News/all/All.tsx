import {
  faArrowRight,
  faCalendar,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import news from "../../../../../public/images/mme/News1.png";
import Image from "next/image";
import React from "react";

const newses = [
  {
    id: 1,
    number: "១៥៦",
    text: "ការស្នើសុំផ្លាស់ប្តូរអ្នកគ្រប់គ្រង",
    date: "ប្រកាស​ - ម្សិលមិញ",
  },
  {
    id: 2,
    number: "១៥៦",
    text: "ការស្នើសុំផ្លាស់ប្តូរអ្នកគ្រប់គ្រង",
    date: "ប្រកាស​ - ម្សិលមិញ",
  },
  {
    id: 3,
    number: "១៥៦",
    text: "ការស្នើសុំផ្លាស់ប្តូរអ្នកគ្រប់គ្រង",
    date: "ប្រកាស​ - ម្សិលមិញ",
  },
  {
    id: 4,
    number: "១៥៦",
    text: "ការស្នើសុំផ្លាស់ប្តូរអ្នកគ្រប់គ្រង",
    date: "ប្រកាស​ - ម្សិលមិញ",
  },
  {
    id: 5,
    number: "១៥៦",
    text: "ការស្នើសុំផ្លាស់ប្តូរអ្នកគ្រប់គ្រង",
    date: "ប្រកាស​ - ម្សិលមិញ",
  },
  {
    id: 6,
    number: "១៥៦",
    text: "ការស្នើសុំផ្លាស់ប្តូរអ្នកគ្រប់គ្រង",
    date: "ប្រកាស​ - ម្សិលមិញ",
  },
];

const All: React.FC = () => {
  return (
    <section className="relative flex w-full items-center justify-center bg-white">
      {/* Background Images */}
      <div className="absolute inset-0 bg-kbach-1 bg-custom-size bg-left-bottom bg-no-repeat"></div>
      <div className="absolute inset-0 bg-kbach-2 bg-right-top bg-no-repeat"></div>

      <div className="relative flex w-4/5 flex-col justify-between py-12 max-md:py-20">
        <div className="flex w-full flex-col ">
          <div className="flex items-center justify-between  max-[700px]:mb-5 max-[700px]:flex-col">
            <h1 className="py-5 text-4xl font-semibold text-primary">
              ព័ត៌មាន
            </h1>
            <div className="relative">
              <input
                className="border-gray-300 hover:border-gray-400 text-gray-800 focus:shadow-outline w-full appearance-none rounded-lg border-[1px] px-3 py-2 pl-10 leading-tight transition-colors focus:border-purple-600 focus:outline-none focus:ring-purple-600"
                id="search"
                type="text"
                placeholder="ស្វែងរកព័ត៌មាន"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400 hover:text-gray-500 -ml-1 mr-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <div className="absolute inset-y-0 left-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400 hover:text-gray-500 ml-3 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-primary"></div>
        </div>
        {newses.map((n) => (
          <div
            className="shodow-lg mt-10 flex w-full rounded-lg bg-white shadow-md shadow-slate-500 max-[700px]:flex-col"
            key={n.id}
          >
            <div className="h-[200px] w-3/12 p-3 max-[1100px]:w-[40%] max-[700px]:h-[300px] max-[700px]:w-full">
              <Image
                src={news}
                alt=""
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="w-8/12  p-3 max-[1100px]:w-[50%] max-[700px]:w-full">
              <div className="max-lines-2 font-semibold text-black">
                លោក Li Yue អគ្គនាយករងក្រុមហ៊ុន SINOMA OVERSEAS DEVELOPMENT CO.,
                LTD.{" "}
              </div>
              <div className="py-3">
                <FontAwesomeIcon icon={faCalendar} className="me-3" />
                <span>០៨ មិថុនា ២០២៤</span>
              </div>
              <div className="max-lines-3 font-light">
                ជួបសម្តែងការគួរសម និងពិភាក្សាការងារជាមួយ ឯកឧត្តម ទី នរិន្ទ
                រដ្ឋលេខាធិការប្រចាំការ អំពី
                លទ្ធភាពលេីការវិនិយោគវិស័យថាមពលនៅកម្ពុជា
                និងស្វាគមន៍រាល់ចំណាប់អារម្មណ៍ក្នុងការរួមចំណែកអភិវឌ្ឍន៍វិស័យថាមពលកម្ពុជា។ជួបសម្តែងការគួរសម
                និងពិភាក្សាការងារជាមួយ ឯកឧត្តម ទី នរិន្ទ រដ្ឋលេខាធិការប្រចាំការ
                អំពី លទ្ធភាពលេីការវិនិយោគវិស័យថាមពលនៅកម្ពុជា
                និងស្វាគមន៍រាល់ចំណាប់អារម្មណ៍ក្នុងការរួមចំណែកអភិវឌ្ឍន៍វិស័យថាមពលកម្ពុជា។
              </div>
            </div>
            <div className="flex w-1/12 items-end justify-end max-[700px]:w-full">
              <div className="mb-4 me-4 cursor-pointer font-semibold text-primary hover:text-preprimary">
                <span>
                  លម្អិត
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ms-1 max-[1100px]:hidden"
                  />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default All;
