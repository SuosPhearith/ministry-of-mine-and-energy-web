"use client";
import Image from "next/image";
import kh from "../../../../../public/images/mme/flag/kh.png";
import en from "../../../../../public/images/mme/flag/en.png";
import { useEffect, useState } from "react";

const LocaleSwitcher = () => {
  const [locale, setLocale] = useState("kh");

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale") || "kh";
    setLocale(storedLocale);
  }, []);

  const changeLocale = (newLocale: string) => {
    localStorage.setItem("locale", newLocale);
    document.cookie = `locale=${newLocale}; path=/;`;
    setLocale(newLocale);
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => changeLocale("en")}
        disabled={locale === "en"}
        className={`${locale === "en" ? "hidden" : null}`}
      >
        <Image width={20} src={en} alt="flag" />
      </button>
      <button
        onClick={() => changeLocale("kh")}
        disabled={locale === "kh"}
        className={`${locale === "kh" ? "hidden" : null}`}
      >
        <Image width={20} src={kh} alt="flag" />
      </button>
    </div>
  );
};

export default LocaleSwitcher;
