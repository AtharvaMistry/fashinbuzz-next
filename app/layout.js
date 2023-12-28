import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FashinBuzz",
  description: "A platform for fashion innovation and quality textiles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon.png"
        />
      </head>
      <body className={inter.className}>
        {/* <Header /> */}

        {/*  body part  */}
        <div className="pt-[60px] pb-[30px] background-color">{children}</div>

        <footer className="bg-[#B2C8BA]  dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="px-5 md:flex md:justify-between md:px-10">
              <div className="mb-6 flex justify-start flex-col items-start gap-3 md:mb-0">
                <div className="flex justify-start items-start">
                  <Image
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-8 me-3"
                    width={20}
                    height={20}
                    alt="FlowBite Logo"
                  />
                  <span className="self-center text-[#333333] text-2xl font-semibold whitespace-nowrap dark:text-white">
                    FashinBuzz
                  </span>
                </div>
                <span className="text-[#333333]">+91 6356280726</span>
                <span className="text-[#333333]">help@fashinbuzz.com</span>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Resources
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link href="/connect" className="hover:underline">
                        Connect
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/blog" className="hover:underline">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Company
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link href="/about" className=" hover:underline">
                        About
                      </Link>
                    </li>

                    <li className="mb-4">
                      <Link href="/our-service" className="hover:underline">
                        Our Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="px-5 sm:flex sm:items-center sm:justify-between md:px-10">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <Link href="/" className="hover:underline">
                  FashinBuzz™
                </Link>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
