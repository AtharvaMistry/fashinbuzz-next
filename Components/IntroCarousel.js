import Image from "next/image"

function IntroCarousel() {
    return (
        <>
            <div className="grid px-5 my-10 md:px-10">
                <div className="carousel w-full h-[350px]">
                    <div id="item1" className="carousel-item w-full">
                        <Image src="/images/home1 (1).png" alt='' width={1000} height={350} className='w-full' layout='responsive' />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <Image src="/images/home1 (2).png" alt='' width={1000} height={350} className='w-full' layout='responsive' />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                </div>
            </div>
        </>
    )
}

export default IntroCarousel