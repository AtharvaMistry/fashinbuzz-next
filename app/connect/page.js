"use client";
import { Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Page() {
  const [formData, setformData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [toastAddCustomer, settoastAddCustomer] = useState(false);
  // const handleFormData = () => {
  //   console.log(formData, "formdata");
  // };
  const {
    open,
    selectedLink,
    placement,
    scrollValue,
    showDrawer,
    onClose,
    onChange,
  } = useLayoutState();

  const handleFormData = async () => {
    try {
      console.log("add blog api");
      const res = await fetch("http://localhost:3000/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to add blog post");
      }
      // Update the data after adding a new blog post
      // const newData = await res.json();
      // setData((prevData) => ({
      //   topics: [...prevData.topics, newData],
      // }));
      settoastAddCustomer(true);
      setformData({
        fullname: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding blog post:", error.message);
    }
  };
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
                <Link href="/admin" onClick={() => setOpen(false)}>
                  <div className="flex shrink-0 justify-start  text-base items-center mb-3 text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl">
                    <p className="font-medium  ">Admin</p>
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
              {/* <Link
              href="/admin"
              className={`${selectedLink === "admin" ? "underline" : ""}`}
              onClick={() => {
                setSelectedLink("admin");
                setOpen(false);
              }}
            >
              <div className="flex shrink-0 justify-start  text-sm items-center text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl">
                <p className="font-medium  ">Admin</p>
              </div>
            </Link> */}
            </div>
          </div>
        </div>
        {/* progress bar */}
        {/* <div className='fixed top-[47px] left-0  h-[0.5px] bg-red-300'></div> */}
      </div>
      {/* header */}
      <div className="grid px-5 py-10">
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6">
              <h1 className="text-4xl font-bold">Get in touch</h1>
              <p className="pt-2 pb-4">
                Fill in the form to start a conversation
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Surat,Gujarat</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>+91 84608 00999</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>help@fashinbuzz.com</span>
                </p>
              </div>
            </div>
            <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
              <label className="block">
                <span className="mb-1">Full name</span>
                <input
                  type="text"
                  id="fullname"
                  value={formData.fullname}
                  onChange={(e) =>
                    setformData((prevData) => ({
                      ...prevData,
                      fullname: e.target.value,
                    }))
                  }
                  placeholder="Leroy Jenkins"
                  className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
                />
              </label>
              <label className="block">
                <span className="mb-1">Email address</span>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setformData((prevData) => ({
                      ...prevData,
                      email: e.target.value,
                    }))
                  }
                  placeholder="leroy@jenkins.com"
                  className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
                />
              </label>
              <label className="block">
                <span className="mb-1">Message</span>
                <textarea
                  rows="3"
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setformData((prevData) => ({
                      ...prevData,
                      message: e.target.value,
                    }))
                  }
                  className="block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800"
                ></textarea>
              </label>
              <button
                type="button"
                onClick={handleFormData}
                className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri"
              >
                Submit
              </button>
              {toastAddCustomer && (
                <div className="toast">
                  <div className="alert alert-info">
                    <span>We&apos;ll connect you soon!</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Page;
