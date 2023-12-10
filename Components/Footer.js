import Image from "next/image"
import Link from "next/link"

function Footer() {
    return (
        <>

            <footer class="bg-[#B2C8BA]  dark:bg-gray-900">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="px-5 md:flex md:justify-between md:px-10">
                        <div class="mb-6 flex justify-start flex-col items-start gap-3 md:mb-0">
                            <div className="flex justify-start items-start">
                                <Image src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" width={20} height={20} alt="FlowBite Logo" />
                                <span class="self-center text-[#333333] text-2xl font-semibold whitespace-nowrap dark:text-white">FashinBuzz</span>
                            </div>
                            <span className="text-[#333333]">+91 84608 00999</span>
                            <span className="text-[#333333]">help@fashinbuzz.com</span>

                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link href="/connect" className="hover:underline">Connect</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="/blog" className="hover:underline">Blog</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link href="/about" className=" hover:underline">About</Link>
                                    </li>

                                    <li className="mb-4">
                                        <Link href="/our-service" className="hover:underline">Our Services</Link>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div class="px-5 sm:flex sm:items-center sm:justify-between md:px-10">
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" class="hover:underline">FashinBuzz™</Link>. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer