"use client";

import Contact from "@/Components/Contact";
import useLayoutState from "@/Components/useLayout";
import { Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Page() {
  const [data, setData] = useState([]);
  const {
    open,
    selectedLink,
    placement,
    scrollValue,
    showDrawer,
    onClose,
    onChange,
  } = useLayoutState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fashinbuzz.com/api/blog");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await res.json();
        console.log(jsonData, "json data");
        setData(jsonData.reverse());
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);



  return (
    <>

      {/* header */}

      <div
        className={`${scrollValue >= 1 ? "bg-[#B2C8BA]" : ""
          } text-[#333333] container  min-w-full fixed top-0 right-0 left-0 z-50`}
      >
        <div className="grid grid-cols-2 px-2 py-2  md:grid-cols-8 md:px-10 xl:px-20">
          <div className="flex justify-start items-center sm:grid md:col-span-2">
            <Link href="/">
              <span className="self-center text-[#333333] text-xl font-semibold whitespace-nowrap dark:text-white">
                FashinBuzz
              </span>
            </Link>
          </div>
          <div className="flex justify-end items-center sm:grid md:col-span-6">
            <div className="flex  justify-end items-center md:hidden">
              <p className="p-1 " onClick={showDrawer}>
                <Image
                  src="/Images/icons8-menu-30.png"
                  width={20}
                  height={20}
                  alt="menu-icon"
                />
              </p>
              <Drawer
                title="FashinBuzz"
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
                className="relative"
              >
                <Link href="/" onClick={() => setOpen(false)}>
                  <div className="flex shrink-0 justify-start  text-base items-center mb-3 text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl">
                    <p className="font-medium  ">Home</p>
                  </div>
                </Link>
                <Link href="/about" onClick={() => setOpen(false)}>
                  <div className="flex shrink-0 justify-start  text-base items-center mb-3 text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl">
                    <p className="font-medium  ">About Us</p>
                  </div>
                </Link>
                <Link href="/blog" onClick={() => setOpen(false)}>
                  <div className="flex shrink-0 justify-start  text-base items-center mb-3 text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl">
                    <p className="font-medium  ">Blog</p>
                  </div>
                </Link>
                <Link href="/our-service" onClick={() => setOpen(false)}>
                  <div className="flex shrink-0 justify-start  text-base items-center mb-3 text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl">
                    <p className="font-medium  ">Our Services</p>
                  </div>
                </Link>

                <Link href="/categories" onClick={() => setOpen(false)}>
                  <div className="flex shrink-0 justify-start  text-base items-center mb-3 text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl">
                    <p className="font-medium  ">Categories</p>
                  </div>
                </Link>
                <Link href="/connect" onClick={() => setOpen(false)}>
                  <div className="flex shrink-0 justify-start  text-base items-center mb-3 text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl">
                    <p className="font-medium  ">Connect</p>
                  </div>
                </Link>

                <button
                  onClick={() => setOpen(false)}
                  className="border border-black rounded-md px-3 py-1 absolute bottom-5 right-5"
                >
                  close
                </button>
              </Drawer>
            </div>

            <div className="hidden  md:flex gap-8 justify-between items-center xl:text-2xl">
              <Link
                href="/"
                className={`${selectedLink === "home" ? "underline" : ""}`}
                onClick={() => {
                  setSelectedLink("home");
                  setOpen(false);
                }}
              >
                <div className="flex shrink-0 justify-start  text-sm items-center text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl">
                  <p className="font-medium  ">Home</p>
                </div>
              </Link>
              <Link
                href="/about"
                className={`${selectedLink === "about" ? "underline" : ""}`}
                onClick={() => {
                  setSelectedLink("about");
                  setOpen(false);
                }}
              >
                <div className="flex shrink-0 justify-start  text-sm items-center text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl">
                  <p className="font-medium  ">About Us</p>
                </div>
              </Link>
              <Link
                href="/blog"
                className={`${selectedLink === "blog" ? "underline" : ""}`}
                onClick={() => {
                  setSelectedLink("blog");
                  setOpen(false);
                }}
              >
                <div className="flex shrink-0 justify-start  text-sm items-center text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl">
                  <p className="font-medium  ">Blog</p>
                </div>
              </Link>
              <Link
                href="/our-service"
                className={`${selectedLink === "service" ? "underline" : ""}`}
                onClick={() => {
                  setSelectedLink("service");
                  setOpen(false);
                }}
              >
                <div className="flex shrink-0 justify-start  text-sm items-center text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl">
                  <p className="font-medium  ">Our Services</p>
                </div>
              </Link>

              <Link
                href="/categories"
                className={`${selectedLink === "categ" ? "underline" : ""}`}
                onClick={() => {
                  setSelectedLink("categ");
                  setOpen(false);
                }}
              >
                <div className="flex shrink-0 justify-start  text-sm items-center text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl">
                  <p className="font-medium  ">Categories</p>
                </div>
              </Link>
              <Link
                href="/connect"
                className={`${selectedLink === "connect" ? "underline" : ""}`}
                onClick={() => {
                  setSelectedLink("connect");
                  setOpen(false);
                }}
              >
                <div className="flex shrink-0 justify-start  text-sm items-center text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl">
                  <p className="font-medium  ">Connect with us</p>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
      {/* header */}


      <div className="grid gap-5 px-5 sm:px-10">
        {data?.topics?.map((ele) => (
          <>
            <div key={ele._id} className="grid gap-5 p-4">
              <p className="text-2xl font-semibold ">{ele.title}</p>
              <p className="text-[#333333] ">{ele.description}</p>
            </div>
          </>
        ))}
      </div>

      <Contact />
    </>
  );
}

export default Page;
