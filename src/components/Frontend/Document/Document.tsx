import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const documents = [
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
  {
    id: 7,
    number: "១៥៦",
    text: "ការស្នើសុំផ្លាស់ប្តូរអ្នកគ្រប់គ្រង",
    date: "ប្រកាស​ - ម្សិលមិញ",
  },
  {
    id: 7,
    number: "១៥៦",
    text: "ការស្នើសុំផ្លាស់ប្តូរអ្នកគ្រប់គ្រង",
    date: "ប្រកាស​ - ម្សិលមិញ",
  },
  {
    id: 8,
    number: "១៥៦",
    text: "ការស្នើសុំផ្លាស់ប្តូរអ្នកគ្រប់គ្រង",
    date: "ប្រកាស​ - ម្សិលមិញ",
  },
  {
    id: 9,
    number: "១៥៦",
    text: "ការស្នើសុំផ្លាស់ប្តូរអ្នកគ្រប់គ្រង",
    date: "ប្រកាស​ - ម្សិលមិញ",
  },
  {
    id: 10,
    number: "១៥៦",
    text: "ការស្នើសុំផ្លាស់ប្តូរអ្នកគ្រប់គ្រង",
    date: "ប្រកាស​ - ម្សិលមិញ",
  },
  {
    id: 11,
    number: "១៥៦",
    text: "ការស្នើសុំផ្លាស់ប្តូរអ្នកគ្រប់គ្រង",
    date: "ប្រកាស​ - ម្សិលមិញ",
  },
  {
    id: 12,
    number: "១៥៦",
    text: "ការស្នើសុំផ្លាស់ប្តូរអ្នកគ្រប់គ្រង",
    date: "ប្រកាស​ - ម្សិលមិញ",
  },
  {
    id: 13,
    number: "១៥៦",
    text: "ការស្នើសុំផ្លាស់ប្តូរអ្នកគ្រប់គ្រង",
    date: "ប្រកាស​ - ម្សិលមិញ",
  },
  {
    id: 14,
    number: "១៥៦",
    text: "ការស្នើសុំផ្លាស់ប្តូរអ្នកគ្រប់គ្រង",
    date: "ប្រកាស​ - ម្សិលមិញ",
  },
  {
    id: 15,
    number: "១៥៦",
    text: "ការស្នើសុំផ្លាស់ប្តូរអ្នកគ្រប់គ្រង",
    date: "ប្រកាស​ - ម្សិលមិញ",
  },
];

const Document: React.FC = () => {
  return (
    <section className="relative flex w-full items-center justify-center bg-white font-light">
      {/* Background Images */}
      <div className="absolute inset-0 bg-kbach-1 bg-custom-size bg-left-bottom bg-no-repeat"></div>
      <div className="absolute inset-0 bg-kbach-2 bg-right-top bg-no-repeat"></div>

      <div className="relative flex w-4/5 flex-col justify-between py-12 max-md:py-20">
        <div className="flex w-full flex-col ">
          <div className="flex items-center justify-between  max-[700px]:mb-5 max-[700px]:flex-col">
            <h1 className="py-5 text-4xl font-semibold text-primary">
              ឯកសារផ្លូវការ
            </h1>
            <div className="relative">
              <input
                className="border-gray-300 hover:border-gray-400 text-gray-800 focus:shadow-outline w-full appearance-none rounded-lg border-[1px] px-3 py-2 pl-10 leading-tight transition-colors focus:border-purple-600 focus:outline-none focus:ring-purple-600"
                id="search"
                type="text"
                placeholder="ស្វែងរកឯកសា"
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
        <div className="mt-10 flex w-full flex-col">
          <div className="flex w-full py-5 text-black-2">
            <div className="flex w-1/12 items-center justify-center font-semibold">
              លេខសម្គាល់
            </div>
            <div className="w-10/12  ps-5 font-semibold">ចំណងជើង</div>
            <div className="flex w-1/12 items-center justify-center font-semibold">
              ទាញយក
            </div>
          </div>
          {documents.map((d, index) => (
            <div
              className={`flex w-full cursor-pointer ${index % 2 === 0 ? "bg-[#F3F4F5]" : "bg-white"} py-3 text-black-2`}
              key={d.id}
            >
              <div className="flex w-1/12 items-center justify-center ">
                {d.number}
              </div>
              <div className="w-10/12 ps-5">
                <div>{d.text}</div>
                <div className="text-xs text-zinc-600">{d.date}</div>
              </div>
              <div className="flex w-1/12 items-center justify-center ">
                <FontAwesomeIcon icon={faDownload} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Document;
