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
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data, "data");
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

      <div className="grid gap-5 p-10">
        <p className="text-2xl font-semibold ">Embracing Change: Navigating Life&apos;s Transitions with Resilience</p>
        <p className="text-[#333333] ">Change is the only constant in life, and our ability to adapt determines our journey&apos;s course. In this blog, we explore the art of embracing change with resilience, recognizing it as a powerful force that propels personal growth and opens doors to new opportunities.

          The Nature of Change:
          Reflect on the inevitability of change and its diverse forms. From career shifts to personal milestones, explore how change is an integral part of the human experience.

          The Psychology of Adaptation:
          Delve into the psychology of adaptation and the human brain&apos;s capacity to cope with change. Discuss the concept of neuroplasticity and how fostering a growth mindset can enhance resilience.

          Embracing Uncertainty:
          Explore the idea that change often brings uncertainty. Provide strategies for embracing ambiguity and finding comfort in the unknown, highlighting that growth often occurs outside our comfort zones.

          Learning from Setbacks:
          Share stories of resilience and triumph over adversity. Discuss the importance of viewing setbacks as opportunities for learning and growth, rather than insurmountable obstacles.

          Cultivating Resilience Through Mindfulness:
          Introduce mindfulness as a tool for navigating change. Explore practices such as meditation and self-reflection that can help individuals stay present and resilient in the face of life&apos;s twists and turns.

          Building a Support Network:
          Emphasize the significance of social connections during times of change. Discuss the role of friends, family, and mentors in providing support and perspective throughout different life transitions.

          Setting Realistic Expectations:
          Encourage readers to set realistic expectations when facing change. Explore the idea that progress may be gradual, and setbacks are a natural part of the journey towards embracing a new normal.

          Celebrating Growth:
          Celebrate the positive transformations that often accompany change. Highlight personal anecdotes or case studies that showcase how individuals have flourished by embracing and navigating life&apos;s transitions.</p>
      </div>
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
      {/* <div className="grid px-5 sm:px-10">
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <a
              rel="noopener noreferrer"
              href="#"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
            >
              <img
                src="https://source.unsplash.com/random/480x360"
                alt=""
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                  Noster tincidunt reprimique ad pro
                </h3>
                <span className="text-xs dark:text-gray-400">
                  February 19, 2021
                </span>
                <p>
                  Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                  in graece fuisset, eos affert putent doctus id.
                </p>
              </div>
            </a>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?1"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 21, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?2"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 22, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?3"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 23, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?4"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 24, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?5"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 25, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?6"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 26, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
              >
                Load more posts...
              </button>
            </div>
          </div>
        </section>
      </div> */}
      <Contact />
    </>
  );
}

export default Page;
