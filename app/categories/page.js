import Contact from "@/Components/Contact"
import Image from "next/image"
import Link from "next/link"

function page() {
    return (
        <>

            <div className="grid grid-cols-1 px-5 gap-8 my-10 sm:grid-cols-3 sm:px-10 lg:grid-cols-4">
                <p className='text-xl mb-3 text-[#545B77] min-w-full px-5 col-span-1 border-dotted border-2 border-[#86A789] py-1 text-center sm:px-10 sm:col-span-3 lg:col-span-4'>Our Categories</p>
                <div className="carousel-item">
                    <div className='flex flex-col justify-between items-center'>
                        <Image src="/Images/group (4).png"
                            width={220}
                            height={100}
                            quality={100}
                            alt=''
                            className='object-cover h-full rounded-t-xl' />
                        <p className='bg-[#D2E3C8] w-full px-5 py-2 text-center rounded-b-lg'>Ethinic Wear</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='flex flex-col justify-between items-center'>
                        <Image src="/Images/western-wear.jpg"
                            width={220}
                            height={100}
                            quality={100}
                            alt=''
                            className='object-cover  h-full rounded-t-xl' />
                        <p className='bg-[#D2E3C8] w-full px-5 py-2 text-center rounded-b-lg'>Western Wear</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='flex flex-col justify-between items-center'>
                        <Image
                            src="/Images/casual.jpg"
                            quality={100}
                            width={220}
                            height={100}
                            alt=''
                            className='object-cover h-full rounded-t-xl' />
                        <p className='bg-[#D2E3C8] w-full px-5 py-2 text-center rounded-b-lg'>Casual Wear</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='flex flex-col justify-between items-center'>
                        <Image src="/Images/group (3).png"
                            width={220}
                            height={100}
                            quality={100}
                            alt=''
                            className='object-cover  h-full rounded-t-xl' />
                        <p className='bg-[#D2E3C8] w-full px-5 py-2 text-center rounded-b-lg'>Winter Wear</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='flex flex-col justify-between items-center'>
                        <Image src="/Images/lounge-wear.jpg"
                            width={220}
                            height={100}
                            quality={100}
                            alt=''
                            className='object-cover h-full rounded-t-xl' />
                        <p className='bg-[#D2E3C8] w-full px-5 py-2 text-center rounded-b-lg'>Lounge Wear</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='flex flex-col justify-between items-center'>
                        <Image src="/Images/group (2).png"
                            width={220}
                            height={100}
                            quality={100}
                            alt=''
                            className='object-cover h-full rounded-t-xl' />
                        <p className='bg-[#D2E3C8] w-full px-5 py-2 text-center rounded-b-lg'>Active Wear</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='flex flex-col justify-between items-center'>
                        <Image src="/Images/group (1).png"
                            width={220}
                            height={100}
                            quality={100}
                            alt=''
                            className='object-cover  h-full rounded-t-xl' />
                        <p className='bg-[#D2E3C8] w-full px-5 py-2 text-center rounded-b-lg'>Kids Wear</p>
                    </div>
                </div>
            </div>

            <Contact />

        </>
    )
}

export default page