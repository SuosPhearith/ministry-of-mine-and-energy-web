"use client";
import React, { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../../public/images/mme/logo-white.png";
import kh from "../../../../public/images/mme/flag/kh.png";
import Image from "next/image";
import Link from "next/link";
import DropdownAbout from "./header/DropdownAbout";
import DropdownAction from "./header/DropdownAction";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-9999">
      <nav className="flex w-full items-center justify-center bg-primary text-white shadow-md">
        <div className="flex w-[80%] items-center justify-between py-2 max-[1300px]:py-1 max-[600px]:w-[90%]">
          <Link href="/" className="max-w-[250px] max-[600px]:max-w-[200px]">
            <Image src={logo} alt="logo" />
          </Link>
          <div className="flex h-full w-[70%] items-center justify-between max-[1200px]:hidden">
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/"
              className={
                pathname === "/"
                  ? "text-warning"
                  : "text-white hover:text-warning"
              }
            >
              ទំព័រដើម
            </Link>
            <DropdownAbout />
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/document"
              className={
                pathname === "/document"
                  ? "text-warning"
                  : "text-white hover:text-warning"
              }
            >
              ឯកសារផ្លូវការ
            </Link>
            <DropdownAction />
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/service"
              className={
                pathname === "/service"
                  ? "text-warning"
                  : "text-white hover:text-warning"
              }
            >
              សេវាសាធារណៈ
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/contact"
              className={
                pathname === "/contact"
                  ? "text-warning"
                  : "text-white hover:text-warning"
              }
            >
              ទំនាក់ទំនង
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} href="">
              <Image width={20} src={kh} alt="flag" />
            </Link>
          </div>
          <div className="block min-[1200px]:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className="cursor-pointer max-[600px]:text-xl min-[600px]:text-2xl"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </nav>
      <div
        className={`fixed left-0 top-0 h-full w-full transform bg-primary text-white transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} min-[1200px]:hidden`}
      >
        <div className="flex justify-between p-4">
          <span>
            <Image src={logo} alt="" width={200} />
          </span>
          <FontAwesomeIcon
            icon={faXmark}
            className="cursor-pointer max-[600px]:text-xl min-[600px]:text-2xl"
            onClick={toggleMenu}
          />
        </div>
        <ul className="mx-auto mt-8 flex w-full flex-col gap-2">
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/"
            className="bg-preprimary"
          >
            <details className="group">
              <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                <span className="flex gap-2">
                  <span>ទំព័រដើម</span>
                </span>
              </summary>
            </details>
          </Link>
          <li className="bg-preprimary">
            <details className="group">
              <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                <span className="flex gap-2">
                  <span>អំពីក្រសូង</span>
                </span>
                <svg
                  className="text-gray-500 h-5 w-5 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </summary>

              <article className="px-4 pb-4">
                <ul className="mt-4 flex flex-col gap-4 pl-2">
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    href="/about/mission"
                    className="flex gap-2 rounded-md px-4 py-2 hover:bg-primary"
                  >
                    សាវដា និងបេសកម្ម
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    href="/about/minister"
                    className="flex gap-2 rounded-md px-4 py-2 hover:bg-primary"
                  >
                    អំពីឯកត្តមរដ្ឋមន្ត្រី
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    href="/about/structure"
                    className="flex gap-2 rounded-md px-4 py-2 hover:bg-primary"
                  >
                    រចនាសម្ព័ន្
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    href="/about/management"
                    className="flex gap-2 rounded-md px-4 py-2 hover:bg-primary"
                  >
                    ថ្នាក់ដឹកនាំ
                  </Link>
                </ul>
              </article>
            </details>
          </li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/document"
            className="bg-preprimary"
          >
            <details className="group">
              <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                <span className="flex gap-2">
                  <span>ឯកសារផ្លូវការ</span>
                </span>
              </summary>
            </details>
          </Link>
          <li className="bg-preprimary">
            <details className="group">
              <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                <span className="flex gap-2">
                  <span>សកម្មភាព</span>
                </span>
                <svg
                  className="text-gray-500 h-5 w-5 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </summary>

              <article className="px-4 pb-4">
                <ul className="mt-4 flex flex-col gap-4 pl-2">
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    href="/news/minister"
                    className="flex gap-2 rounded-md px-4 py-2 hover:bg-primary"
                  >
                    ថ្នាក់ដឹកនាំ
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    href="/news/all"
                    className="flex gap-2 rounded-md px-4 py-2 hover:bg-primary"
                  >
                    ព័ត៍មាន
                  </Link>
                </ul>
              </article>
            </details>
          </li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/service"
            className="bg-preprimary"
          >
            <details className="group">
              <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                <span className="flex gap-2">
                  <span>សេវាសាធារណៈ</span>
                </span>
              </summary>
            </details>
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="contact"
            className="bg-preprimary"
          >
            <details className="group">
              <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                <span className="flex gap-2">
                  <span>ទំនាក់ទំនង</span>
                </span>
              </summary>
            </details>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
