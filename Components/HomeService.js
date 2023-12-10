import Image from "next/image"

function HomeService() {
    return (
        <>
            <div className="grid grid-cols-1 my-10 px-5 gap-5 place-items-center md:px-10 md:grid-cols-2">
                <p className='col-span-1 min-w-full text-xl mb-3 text-[#545B77] border-dotted border-2 border-[#86A789] py-1 text-center md:col-span-2'>Our Services</p>

                <div className="card card-side bg-base-100 shadow-xl max-w-[350px] sm:min-w-[370px] md:max-h-[250px] md:min-w-[400px]">
                    <figure className='min-w-[37%]'>
                        <Image src="/Images/service2.png"
                            width={100}
                            height={250}
                            alt=''
                            className='object-cover w-full' />
                    </figure>
                    <div className="card-body bg-[#B2C8BA] rounded-r-xl">
                        <h2 className="card-title">Design</h2>
                        <p className='text-sm'>At FashinBuzz, innovation is at the core of what we do. we also provide state-of-the-art design solutions for garments that leverage the latest software and AI technologies.
                        </p>

                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl max-w-[350px] sm:min-w-[370px] md:max-h-[250px] md:min-w-[400px]">
                    <figure className='min-w-[37%]'>
                        <Image src="/Images/service3.png"
                            width={100}
                            height={250}
                            alt=''
                            className='object-cover w-full' />
                    </figure>
                    <div className="card-body bg-[#B2C8BA] rounded-r-xl">
                        <h2 className="card-title">Manufacturing</h2>
                        <p className='text-sm'>we have harnessed the transformative capabilities of AI to revolutionize our manufacturing processes, ensuring the production of high-quality products that meet and exceed industry standards.</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl max-w-[350px] sm:min-w-[370px] md:max-h-[250px] md:min-w-[400px]">
                    <figure className='min-w-[37%]'>
                        <Image src="/Images/service1.png"
                            width={100}
                            height={250}
                            alt=''
                            className='object-cover w-full' />
                    </figure>
                    <div className="card-body bg-[#B2C8BA] rounded-r-xl">
                        <h2 className="card-title">Delivery</h2>
                        <p className='text-sm'>Experience lightning-fast delivery with us! At FashinBuzz, we take pride in providing the quickest delivery times in the industry, and we have the statistics to prove it.</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl max-w-[350px] sm:min-w-[370px] md:min-h-[250px] md:min-w-[400px]">
                    <figure className='min-w-[37%]'>
                        <Image src="/Images/vs1.png"
                            width={100}
                            height={250}
                            alt=''
                            className='object-cover w-full' />
                    </figure>
                    <div className="card-body bg-[#B2C8BA] rounded-r-xl">
                        <h2 className="card-title ">Virtual Sampling</h2>
                        <p>Coming soon...</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeService