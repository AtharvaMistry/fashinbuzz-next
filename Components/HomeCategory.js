import Image from "next/image"

function HomeCategory() {
    return (
        <>
            <div className="grid my-10 px-5 gap-5 md:px-10">
                <p className='text-xl mb-3 text-[#545B77] col-span-1 border-dotted border-2 border-[#86A789] py-1 text-center'>Product Category</p>
                <div className="carousel carousel-center min-w-screen p-4 space-x-4 bg-[#B2C8BA] rounded-box">
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
            </div>
        </>
    )
}

export default HomeCategory 