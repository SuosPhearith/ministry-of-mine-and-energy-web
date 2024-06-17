import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="relative flex w-full items-center justify-center bg-white font-light">
      {/* Background Images */}
      <div className="absolute inset-0 bg-kbach-1 bg-custom-size bg-left-bottom bg-no-repeat"></div>
      <div className="absolute inset-0 bg-kbach-2 bg-right-top bg-no-repeat"></div>

      <div className="relative flex w-4/5 flex-col justify-between py-12 max-md:py-20">
        <div className="flex w-full flex-col">
          <h1 className="py-5 text-4xl font-semibold text-primary">
            ទំនាក់ទំនង
          </h1>
          <div className="h-[1px] bg-primary"></div>
        </div>
        <div className="flex w-full text-black max-[1000px]:flex-col-reverse">
          <div className="w-1/2 max-[1000px]:w-full">
            <div className="flex justify-start py-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="me-5 h-6 text-primary"
              />
              spokeman@mme.gov.kh
            </div>
            <div className="flex justify-start py-3">
              <FontAwesomeIcon
                icon={faPhone}
                className="me-5 h-6 text-primary"
              />
              023 219 574
            </div>
            <div className="flex justify-start py-3">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="me-5 h-6 text-primary"
              />
              មហាវិធីព្រះនរោត្តម​ កែងផ្លូវលេខ១០៦ សង្កាត់វត្តភ្នំ ខណ្ឌដូនពេញ
              រាជធានីភ្នំពេញ
            </div>
            <div className="flex justify-start py-3">
              <div>
                <svg
                  width={25}
                  className="me-5"
                  fill="#016A70"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
              </div>
              <a
                className="hover:text-primary"
                href="https://web.facebook.com/MMECambodia?_rdc=1&_rdr"
              >
                https://web.facebook.com/MMECambodia?_rdc=1&_rdr
              </a>
            </div>
            <div className="flex justify-start py-3">
              <div>
                <svg
                  width={25}
                  fill="#016A70"
                  className="me-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                </svg>
              </div>
              <a
                className="hover:text-primary"
                href="https://t.me/mmecambodiatelegram"
              >
                https://t.me/mmecambodiatelegram
              </a>
            </div>
            <div className="flex justify-start py-3">
              <div>
                <svg
                  width={25}
                  fill="#016A70"
                  className="me-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                </svg>
              </div>
              <a
                className="hover:text-primary"
                href="https://www.youtube.com/@mmecambodia624"
              >
                https://www.youtube.com/@mmecambodia624
              </a>
            </div>
            <div className="py-5 text-2xl font-semibold text-primary">
              ទម្រង់ទំនាក់ទំនងតាមរយៈអុីម៉ែល
            </div>
            <div className="flex w-full max-[600px]:flex-col">
              <div className="w-1/3 rounded-lg  bg-white p-2 max-[600px]:w-full">
                <input
                  type="text"
                  placeholder="ឈ្មោះ"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="w-1/3 rounded-lg  bg-white p-2 max-[600px]:w-full">
                <input
                  type="text"
                  placeholder="ឈ្មោះអង្គភាព"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="w-1/3 rounded-lg  bg-white p-2 max-[600px]:w-full">
                <input
                  type="text"
                  placeholder="តួនាទី"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="flex w-full  max-[600px]:flex-col">
              <div className="w-1/3 rounded-lg  bg-white p-2 max-[600px]:w-full">
                <input
                  type="text"
                  placeholder="លេខទូរស័ព្ទ"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="w-1/3 rounded-lg  bg-white p-2 max-[600px]:w-full">
                <input
                  type="text"
                  placeholder="អុីម៉ែល"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="w-1/3 rounded-lg  bg-white p-2 max-[600px]:w-full">
                <input
                  type="text"
                  placeholder="ចំណងជើង"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="w-full bg-white p-2">
              <textarea
                rows={6}
                placeholder="មតិយោបល់"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              ></textarea>
            </div>
          </div>
          <div className="w-1/2 max-[1000px]:w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.688274053338!2d104.9201936747756!3d11.574190143973134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951c42128aaeb%3A0x4b2c37a71f7f50b5!2sMinistry%20of%20Mines%20and%20Energy!5e0!3m2!1sen!2skh!4v1718532184579!5m2!1sen!2skh"
              className="h-full w-full p-4 max-[1000px]:h-[300px]"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
