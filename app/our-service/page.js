"use client"

import Contact from "@/Components/Contact"
import useLayoutState from "@/Components/useLayout";
import { Drawer } from "antd";
import Image from "next/image"
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

            <div className="grid px-5 mb-5 gap-5 sm:px-10">
                <p className='text-xl mb-3 text-[#545B77] min-w-full col-span-1 border-dotted border-2 border-[#86A789] py-1 text-center '>What we offer</p>
                <div className="flex flex-col items-center min-w-full bg-[#B2C8BA] border border-[#D2E3C8] rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#D2E3C8] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <Image src="/Images/service3.png"
                        width={100}
                        quality={100}
                        height={100}
                        alt=''
                        className='object-cover w-full rounded-l-lg' />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Design</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">At FashinBuzz, innovation is at the core of what we do. we also provide state-of-the-art design solutions for garments that leverage the latest software and AI technologies.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center min-w-full bg-[#B2C8BA] border border-[#D2E3C8] rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#D2E3C8] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Manufacturing</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">we have harnessed the transformative capabilities of AI to revolutionize our manufacturing processes, ensuring the production of high-quality products that meet and exceed industry standards.</p>
                    </div>
                    <Image src="/Images/service2.png"
                        width={100}
                        quality={100}
                        height={100}
                        alt=''
                        className='object-cover w-full rounded-r-lg' />
                </div>
                <div className="flex flex-col items-center min-w-full bg-[#B2C8BA] border border-[#D2E3C8] rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#D2E3C8] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <Image src="/Images/service1.png"
                        width={100}
                        quality={100}
                        height={100}
                        alt=''
                        className='object-cover w-full rounded-l-lg' />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Delivery</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Experience lightning-fast delivery with us! At FashinBuzz, we take pride in providing the quickest delivery times in the industry, and we have the statistics to prove it.</p>
                    </div>
                </div>
            </div>
            <Contact />

        </>
    )
}

export default Page