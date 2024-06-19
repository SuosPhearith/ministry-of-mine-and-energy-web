// "use client";
// import "jsvectormap/dist/css/jsvectormap.css";
// import "flatpickr/dist/flatpickr.min.css";
// import "@/css/satoshi.css";
// import "@/css/style.css";
// import React, { useEffect, useState } from "react";
// import Loader from "@/components/common/Loader";
// import Navbar from "@/components/Frontend/Navbar/Navbar";
// import Footer from "@/components/Frontend/Footer/Footer";
// import { usePathname } from "next/navigation";
// import { NextIntlClientProvider } from "next-intl";
// import messagesEn from "../../messages/en.json";
// import messagesKh from "../../messages/kh.json";

// const messages = {
//   en: messagesEn,
//   kh: messagesKh,
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [loading, setLoading] = useState<boolean>(true);
//   const pathname = usePathname();

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000);
//   }, []);

//   return (
//     <html lang="en">
//       <body suppressHydrationWarning={true} className="font-sans">
//         {loading ? (
//           <Loader />
//         ) : (
//           <div className=" dark:bg-boxdark-2 dark:text-bodydark">
//             {pathname.startsWith("/admin") ? (
//               <main>{children}</main>
//             ) : (
//               <>
//                 <NextIntlClientProvider messages={messages}>
//                   <Navbar />
//                   {children}
//                   <Footer />
//                 </NextIntlClientProvider>
//               </>
//             )}
//           </div>
//         )}
//       </body>
//     </html>
//   );
// }
"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import Navbar from "@/components/Frontend/Navbar/Navbar";
import Footer from "@/components/Frontend/Footer/Footer";
import { usePathname } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import messagesEn from "../../messages/en.json";
import messagesKh from "../../messages/kh.json";

const messages: any = {
  en: messagesEn,
  kh: messagesKh,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);
  const [locale, setLocale] = useState<string>("en");
  const pathname = usePathname();

  useEffect(() => {
    // Fetch locale from localStorage or default to 'en'
    const storedLocale = localStorage.getItem("locale") || "en";
    setLocale(storedLocale);

    // Simulate loading delay
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true} className="font-sans">
        {loading ? (
          <Loader />
        ) : (
          <div className="dark:bg-boxdark-2 dark:text-bodydark">
            {pathname.startsWith("/admin") ? (
              <main>{children}</main>
            ) : (
              <NextIntlClientProvider
                locale={locale}
                messages={messages[locale]}
              >
                <Navbar />
                {children}
                <Footer />
              </NextIntlClientProvider>
            )}
          </div>
        )}
      </body>
    </html>
  );
}
