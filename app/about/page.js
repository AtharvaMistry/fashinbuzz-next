"use client";

import Contact from "@/Components/Contact"
import useLayoutState from "@/Components/useLayout";
import { Drawer } from "antd";
import Image from "next/image";
import Link from "next/link"

function Page() {
    const {
        open,
        selectedLink,
        placement,
        scrollValue,
        showDrawer,
        onClose,
        onChange,
    } = useLayoutState();
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
            <div className="grid px-5 text-center md:px-10">
                <p className="text-4xl font-semibold">Our Journey - From Fabrics to Digitise Fashion</p>
                <p className="mb-3 text-[#464646] mt-12  dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">For the past five years, FashinBuzz has been a trusted name in the textile industry, offering top-notch design, manufacturing, and delivery services. We&apos;ve been the driving force behind many successful fashion endeavors, and now, we&apos;re excited to take our expertise online.</p>
                <p className="text-[#464646] dark:text-gray-400">Our story begins with a passion for textiles and a commitment to quality. Over the years, we&apos;ve honed our skills, partnered with talented designers, and built a robust manufacturing and delivery network that ensures excellence every step of the way.</p>
                <p className="text-[#464646] dark:text-gray-400">Today, we&apos;re proud to introduce our online platform, where you can experience the same dedication to quality and innovation that has defined us for half a decade. Join us on this new chapter of our journey as we bring fabrics to life and fashion to your doorstep.</p>
                <p className="text-[#464646] dark:text-gray-400">Explore our website to discover the endless possibilities we offer, and be a part of our story as we continue to weave fashion dreams into reality.</p>
            </div>
            <div className="grid grid-cols-1 gap-5 px-5 my-10  md:grid-cols-2 md:px-10">
                <div className="card  bg-[#D2E3C8] shadow-xl sm:w-96">
                    <div className="card-body">
                        <h2 className="card-title">VISION</h2>
                        <p>Our vision at FashinBuzz is to be more than just a textile company; we aim to be the embodiment of trust in the world of fashion. We believe that trust is the thread that binds every aspect of our business, from design to delivery.</p>
                    </div>
                </div>
                <div className="card  bg-[#D2E3C8] shadow-xl sm:w-96">
                    <div className="card-body">
                        <h2 className="card-title">MISSION</h2>
                        <p>At FashinBuzz, our mission is to elevate the fashion experience for our customers, partners, and communities.To digitise textile supply chain and get sustainable growth.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 px-5 border-dotted border-t-2 border-b-2 border-[#86A789] sm:grid-cols-2 sm:px-10">
                <section className="md:px-6">
                    <div className="container max-w-xl mx-auto">
                        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">

                            <blockquote className="max-w-lg text-lg italic font-medium text-center">Meet Abhay Raviya(CEO)a mechanical engineer with a deep-rooted passion for textiles, leads our journey at FashinBuzz. With a wealth of knowledge in textile technology and a keen eye for cloth design manufacturing, Abhay brings expertise and dedication to every aspect of our business. His commitment to quality and innovation forms the bedrock of our company&apos;s success. Trust in his vision to deliver excellence in every thread.</blockquote>
                            <div className="text-center dark:text-gray-400">
                                <p> Abhay Raviya</p>
                                <p>CEO of Company Co.</p>
                            </div>
                            <div className="flex space-x-2">
                                <button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full dark:bg-gray-50"></button>
                                <button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
                                <button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
                                <button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="md:px-6">
                    <div className="container max-w-xl mx-auto">
                        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">

                            <blockquote className="max-w-lg text-lg italic font-medium text-center">Meet Anubhav(CTO), a textile engineer by degree and a entreprenuer by heart, leads the charge as our Chief Technology Officer (CTO). With a profound understanding of AI and technology, he infuses innovation into every aspect of our operations. in ge&apos;s vision to integrate cutting-edge technology seamlessly into our processes, making your experience with us truly exceptional.</blockquote>
                            <div className="text-center dark:text-gray-400">
                                <p>Anubhav vasistha</p>
                                <p>CTO of Company Co.</p>
                            </div>
                            <div className="flex space-x-2">
                                <button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full dark:bg-gray-50"></button>
                                <button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
                                <button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
                                <button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Contact />

        </>
    )
}

export default Page