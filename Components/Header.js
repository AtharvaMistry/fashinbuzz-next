"use client";

import React, { useEffect, useState } from 'react'
import { Button, Drawer, Radio, Space } from 'antd';
import Link from 'next/link';
import { scroll } from "framer-motion"
import '../app/globals.css';
import Image from 'next/image';

function Layout() {

    const [open, setOpen] = useState(false);
    const [selectedLink, setSelectedLink] = useState(null);
    const [placement, setPlacement] = useState('right');
    const [scrollValue, setscrollValue] = useState(0);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };

    // controlling scrolling behavior
    useEffect(() => {
        scroll(progress => {
            const scroll = Math.floor(progress * 100);
            setscrollValue(scroll);
        })
    }, [])


    return (
        <div className={`${scrollValue >= 1 ? 'bg-[#B2C8BA]' : ''} text-[#333333] container  min-w-full fixed top-0 right-0 left-0 z-50`}>
            <div className="grid grid-cols-2 px-2 py-2  md:grid-cols-8 md:px-10 xl:px-20">
                <div className='flex justify-start items-center sm:grid md:col-span-3'>
                    <Link href="/">
                        <span class="self-center text-[#333333] text-xl font-semibold whitespace-nowrap dark:text-white">FashinBuzz</span>
                    </Link>
                </div>
                <div className='flex justify-end items-center sm:grid md:col-span-5'>

                    <div className='flex  justify-end items-center md:hidden'>
                        <p className='p-1 ' onClick={showDrawer}>
                            <Image src="/Images/icons8-menu-30.png" width={20} height={20} alt='menu-icon' />
                        </p>
                        <Drawer
                            title="FashinBuzz"
                            placement={placement}
                            closable={false}
                            onClose={onClose}
                            open={open}
                            key={placement}
                            className='relative'
                        >
                            <Link href="/" onClick={() => setOpen(false)}>
                                <div className='flex shrink-0 justify-start  text-base items-center mb-3 text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                    <p className='font-medium  '>Home</p>
                                </div>
                            </Link>
                            <Link href="/about" onClick={() => setOpen(false)}>
                                <div className='flex shrink-0 justify-start  text-base items-center mb-3 text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                    <p className='font-medium  '>About Us</p>
                                </div>
                            </Link>
                            <Link href="/blog" onClick={() => setOpen(false)}>
                                <div className='flex shrink-0 justify-start  text-base items-center mb-3 text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                    <p className='font-medium  '>Blog</p>
                                </div>
                            </Link>
                            <Link href="/our-service" onClick={() => setOpen(false)}>
                                <div className='flex shrink-0 justify-start  text-base items-center mb-3 text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                    <p className='font-medium  '>Our Services</p>
                                </div>
                            </Link>

                            <Link href="/categories" onClick={() => setOpen(false)}>
                                <div className='flex shrink-0 justify-start  text-base items-center mb-3 text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                    <p className='font-medium  '>Categories</p>
                                </div>
                            </Link>
                            <Link href="/connect" onClick={() => setOpen(false)}>
                                <div className='flex shrink-0 justify-start  text-base items-center mb-3 text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                    <p className='font-medium  '>Connect</p>
                                </div>
                            </Link>
                            <button onClick={() => setOpen(false)} className='border border-black rounded-md px-3 py-1 absolute bottom-5 right-5'>close</button>
                        </Drawer>
                    </div>

                    <div className='hidden  md:flex gap-8 justify-between items-center xl:text-2xl'>
                        <Link href="/" className={`${selectedLink === 'home' ? 'underline' : ''}`} onClick={() => {
                            setSelectedLink('home');
                            setOpen(false);
                        }}>
                            <div className='flex shrink-0 justify-start  text-sm items-center text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                <p className='font-medium  '>Home</p>
                            </div>
                        </Link>
                        <Link
                            href="/about"
                            className={`${selectedLink === 'about' ? 'underline' : ''}`} onClick={() => {
                                setSelectedLink('about');
                                setOpen(false);
                            }} >
                            <div className='flex shrink-0 justify-start  text-sm items-center text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                <p className='font-medium  '>About Us</p>
                            </div>
                        </Link>
                        <Link href="/blog"
                            className={`${selectedLink === 'blog' ? 'underline' : ''}`} onClick={() => {
                                setSelectedLink('blog');
                                setOpen(false);
                            }} >
                            <div className='flex shrink-0 justify-start  text-sm items-center text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                <p className='font-medium  '>Blog</p>
                            </div>
                        </Link>
                        <Link href="/our-service"
                            className={`${selectedLink === 'service' ? 'underline' : ''}`} onClick={() => {
                                setSelectedLink('service');
                                setOpen(false);
                            }} >
                            <div className='flex shrink-0 justify-start  text-sm items-center text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                <p className='font-medium  '>Our Services</p>
                            </div>
                        </Link>

                        <Link href="/categories"
                            className={`${selectedLink === 'categ' ? 'underline' : ''}`} onClick={() => {
                                setSelectedLink('categ');
                                setOpen(false);
                            }} >
                            <div className='flex shrink-0 justify-start  text-sm items-center text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                <p className='font-medium  '>Categories</p>
                            </div>
                        </Link>
                        <Link href="/connect"
                            className={`${selectedLink === 'connect' ? 'underline' : ''}`} onClick={() => {
                                setSelectedLink('connect');
                                setOpen(false);
                            }} >
                            <div className='flex shrink-0 justify-start  text-sm items-center text-[#333333] hover:text-[#333333] hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                <p className='font-medium  '>Connect with us</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* progress bar */}
            {/* <div className='fixed top-[47px] left-0  h-[0.5px] bg-red-300'></div> */}

        </div>
    )
}

export default Layout