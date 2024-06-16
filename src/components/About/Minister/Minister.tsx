import Image from "next/image";
import React from "react";
import minister from "../../../../public/images/mme/HE1-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Minister: React.FC = () => {
  return (
    <section className="relative flex w-full items-center justify-center bg-white">
      {/* Background Images */}
      <div className="absolute inset-0 bg-kbach-1 bg-custom-size bg-left-bottom bg-no-repeat"></div>
      <div className="absolute inset-0 bg-kbach-2 bg-right-top bg-no-repeat"></div>

      <div className="relative flex w-4/5 flex-col justify-between py-12 max-md:py-20">
        <div className="flex w-full flex-col">
          <h1 className="py-5 text-4xl font-semibold text-primary">
            អំពីឯកត្តមរដ្ឋមន្ត្រី
          </h1>
          <div className="h-[1px] bg-primary"></div>
        </div>
        <div className="mt-5 flex justify-between  max-[780px]:flex-col">
          <div className="w-[40%] max-[780px]:w-full">
            <Image
              src={minister}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex w-1/2 flex-col items-start max-[780px]:w-full">
            <div className="mt-5 flex w-full items-center justify-center text-2xl text-primary">
              ឯកឧត្តម កែវ រតនះ
            </div>
            <div className="mt-5 w-full text-black">
              <div className="flex w-full border-t-[1px] border-zinc-300 py-3">
                <div className="ms-6 w-2/6">ថ្ងៃខែឆ្នាំកំណើត </div>
                <div className="w-4/6 font-light">
                  : ថ្ងៃទី ១៦ ខែកញ្ញា ឆ្នាំ១៩៧៣
                </div>
              </div>
              <div className="flex w-full border-t-[1px] border-zinc-300 py-3">
                <div className="ms-6 w-2/6">ទីកន្លែងកំណើត </div>
                <div className="w-4/6 font-light">: កម្ពុជា</div>
              </div>
              <div className="flex w-full border-t-[1px] border-zinc-300 py-3">
                <div className="ms-6 w-2/6">សញ្ជាតិ </div>
                <div className="w-4/6 font-light">: ខ្មែរ</div>
              </div>
              <div className="flex w-full border-t-[1px] border-zinc-300 py-3">
                <div className="ms-6 w-2/6">ភេទ </div>
                <div className="w-4/6 font-light">: ប្រុស</div>
              </div>
              <div className="flex w-full border-b-[1px] border-t-[1px] border-zinc-300 py-3">
                <div className="ms-6 w-2/6">ស្ថានភាពគ្រួសារ </div>
                <div className="w-4/6 font-light">: ...</div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 font-light text-black">
          <div className="mb-7">
            <h1 className="text-2xl font-normal text-primary">ការអប់រំ</h1>
            <div className="ms-5 py-2">
              <FontAwesomeIcon icon={faCircle} className="me-3 w-1" />{" "}
              <span>Columbia University</span>
            </div>
            <div className="ms-5 py-2">
              <FontAwesomeIcon icon={faCircle} className="me-3 w-1" />
              <span>International University of Japan</span>
            </div>
          </div>
          <div className="mb-7">
            <h1 className="text-2xl font-normal text-primary">
              ប្រវត្តិទាក់ទងនឹងវិជ្ជាជីវ
            </h1>
            <div className="ms-5 py-2">
              <FontAwesomeIcon icon={faCircle} className="me-3 w-1" />
              <span>
                ឆ្នាំ២០២៣ - បច្ចុប្បន្ន ៖ ​រដ្ឋមន្ត្រីក្រសូងរ៉ែ និងថាមពល
              </span>
            </div>
            <div className="ms-5 py-2">
              <FontAwesomeIcon icon={faCircle} className="me-3 w-1" />
              <span>ឆ្នាំ២០០៨ - ២០២៣ ៖​ អគ្គនាយកអគ្គិសនីកម្ពុជា</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minister;
