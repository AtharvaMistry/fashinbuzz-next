import Contact from "@/Components/Contact"
import Image from "next/image"
import Link from "next/link"

function page() {
    return (
        <>


            <div className="grid px-5 gap-5 sm:px-10">
                <p className='text-xl mb-3 text-[#545B77] min-w-full col-span-1 border-dotted border-2 border-[#86A789] py-1 text-center '>What we offer</p>
                <div class="flex flex-col items-center min-w-full bg-[#B2C8BA] border border-[#D2E3C8] rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#D2E3C8] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <Image src="/Images/service3.png"
                        width={100}
                        quality={100}
                        height={100}
                        alt=''
                        className='object-cover w-full rounded-l-lg' />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Design</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">At FashinBuzz, innovation is at the core of what we do. we also provide state-of-the-art design solutions for garments that leverage the latest software and AI technologies.</p>
                    </div>
                </div>

                <div class="flex flex-col items-center min-w-full bg-[#B2C8BA] border border-[#D2E3C8] rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#D2E3C8] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Manufacturing</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">we have harnessed the transformative capabilities of AI to revolutionize our manufacturing processes, ensuring the production of high-quality products that meet and exceed industry standards.</p>
                    </div>
                    <Image src="/Images/service2.png"
                        width={100}
                        quality={100}
                        height={100}
                        alt=''
                        className='object-cover w-full rounded-r-lg' />
                </div>
                <div class="flex flex-col items-center min-w-full bg-[#B2C8BA] border border-[#D2E3C8] rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#D2E3C8] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <Image src="/Images/service1.png"
                        width={100}
                        quality={100}
                        height={100}
                        alt=''
                        className='object-cover w-full rounded-l-lg' />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Delivery</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Experience lightning-fast delivery with us! At FashinBuzz, we take pride in providing the quickest delivery times in the industry, and we have the statistics to prove it.</p>
                    </div>
                </div>
            </div>
            <Contact />

        </>
    )
}

export default page