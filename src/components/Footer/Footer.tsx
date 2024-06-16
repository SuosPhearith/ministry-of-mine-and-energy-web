"use client";
import React from "react";
import logo from "../../../public/images/mme/logo/logo.png";
import telegram from "../../../public/images/mme/footer/telegram.svg";
import facebook from "../../../public/images/mme/footer/facebook.svg";
import youtube from "../../../public/images/mme/footer/youtube.svg";
import {
  faLocationDot,
  faMinus,
  faEnvelope,
  faPhone,
  faLink,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="font-light text-white">
    <div className="flex w-full flex-wrap items-start justify-around gap-8 bg-primary px-5 py-11 text-white">
      <div className="w-full md:ms-11 md:w-1/3 lg:w-1/4">
        <div className="">
          <Image width={100} height={100} src={logo} alt="logo" />
        </div>
        <div className="my-5">
          <FontAwesomeIcon
            icon={faLocationDot}
            color="white"
            className="mr-3"
          />
          មហាវិធីព្រះនរោត្តម​ កែងផ្លូវលេខ១០៦ សង្កាត់វត្តភ្នំ ខណ្ឌដូនពេញ
          រាជធានីភ្នំពេញ
          <div className="mt-5 h-[1px] w-full bg-gray"></div>
        </div>
      </div>
      <div className="w-full md:w-1/4 lg:w-1/6">
        <h3 className="text-xl">អំពីក្រសូង</h3>
        <div className="mt-5 h-[1px] w-[50%] bg-gray"></div>
        <Link
          href="/about/mission"
          className="flex cursor-pointer items-center justify-start py-4 hover:text-warning"
        >
          <FontAwesomeIcon icon={faMinus} className="mr-3" />
          សាវដា និងបេសកម្ម
        </Link>
        <Link
          href="/about/minister"
          className="flex cursor-pointer items-center justify-start py-4 hover:text-warning"
        >
          <FontAwesomeIcon icon={faMinus} className="mr-3" />
          អំពីឯកត្តមរដ្ឋមន្ត្រី
        </Link>
        <Link
          href="/about/structure"
          className="flex cursor-pointer items-center justify-start py-4 hover:text-warning"
        >
          <FontAwesomeIcon icon={faMinus} className="mr-3" />
          រចនាសម្ព័ន្
        </Link>
        <Link
          href="/about/management"
          className="flex cursor-pointer items-center justify-start py-4 hover:text-warning"
        >
          <FontAwesomeIcon icon={faMinus} className="mr-3" />
          ថ្នាក់ដឹកនាំ
        </Link>
      </div>
      <div className="w-full md:w-1/4 lg:w-1/6">
        <h3 className="text-xl">ទំព័រសំខាន់ៗ</h3>
        <div className="mt-5 h-[1px] w-[50%] bg-gray"></div>
        <Link
          href="/"
          className="flex cursor-pointer items-center justify-start py-4 hover:text-warning"
        >
          <FontAwesomeIcon icon={faMinus} className="mr-3" />
          ឯកសារផ្លូវការ
        </Link>
        <Link
          href="/document"
          className="flex cursor-pointer items-center justify-start py-4 hover:text-warning"
        >
          <FontAwesomeIcon icon={faMinus} className="mr-3" />
          សេវាសាធារណៈ
        </Link>
        <Link
          href="/news/all"
          className="flex cursor-pointer items-center justify-start py-4 hover:text-warning"
        >
          <FontAwesomeIcon icon={faMinus} className="mr-3" />
          ព័ត៌មាន
        </Link>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/4">
        <h3 className="text-xl">ទំនាក់ទំនង</h3>
        <div className="mt-5 h-[1px] w-[50%] bg-gray"></div>
        <Link
          href="/"
          className="flex cursor-pointer items-center justify-start py-4 hover:text-warning"
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
          spokeman@mme.gov.kh
        </Link>
        <Link
          href="/"
          className="flex cursor-pointer items-center justify-start py-4 hover:text-warning"
        >
          <FontAwesomeIcon icon={faPhone} className="mr-3" />
          023 219 574
        </Link>
        <Link
          href="/"
          className="flex cursor-pointer items-center justify-start py-4 hover:text-warning"
        >
          <FontAwesomeIcon icon={faLink} className="mr-3" />
          អគ្គិសនីកម្ពុជា (EDC)
        </Link>
        <Link
          href="/"
          className="flex cursor-pointer items-center justify-start py-4 hover:text-warning"
        >
          <FontAwesomeIcon icon={faLink} className="mr-3" />
          អាជ្ញាធរអគ្គិសនីកម្ពុជា (EAC)
        </Link>
        <Link
          href="/"
          className="flex cursor-pointer items-center justify-start py-4 hover:text-warning"
        >
          <FontAwesomeIcon icon={faLink} className="mr-3" />
          មន្ទីរ៉ែនិងថាមពលរាជធានីខេត្តទាំង២៥
        </Link>
      </div>
    </div>
    <div className="flex w-full flex-wrap items-center justify-between gap-8 bg-preprimary p-5">
      <div className="mb-4 ms-14 md:mb-0">
        <FontAwesomeIcon icon={faCopyright} color="white" className="mr-3" />
        ២០២៤​ រក្សាសិទ្ធគ្រប់យ៉ាងដោយក្រសួងរ៉ែ និងថាមពល (ក.រ.ថ)
      </div>
      <div className="me-14 flex gap-3">
        <a
          target="_blank"
          href="https://web.facebook.com/MMECambodia?_rdc=1&_rdr"
        >
          <Image
            src={facebook}
            alt="facebook"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </a>
        <a target="_blank" href="https://t.me/mmecambodiatelegram">
          <Image
            src={telegram}
            alt="telegram"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </a>
        <a target="_blank" href="https://www.youtube.com/@mmecambodia624">
          <Image
            src={youtube}
            alt="youtube"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
