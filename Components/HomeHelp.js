import Image from "next/image"

function HomeHelp() {
    return (
        <>
            <div className="grid grid-cols-1 my-10 px-5 gap-5 sm:grid-cols-2 md:grid-cols-2 md:px-10 xl:grid-cols-4 2xl:grid-cols-4">
                <p className='text-xl mb-3 text-[#545B77] min-w-full col-span-1 border-dotted border-2 border-[#86A789] py-1 text-center sm:col-span-2 xl:col-span-4'>How can we help?</p>
                <div className="card max-w-[350px] glass col-span-1">
                    <figure>
                        <Image src="/Images/help(4).jpg"
                            width={100}
                            quality={100}
                            height={100}
                            alt=''
                            className='object-cover w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Harnessing AI for Trend Prediction</h2>
                        <p>Using AI, We can minimize dead-stock.
                            Get update with latest design.
                            Reduce burden for making design everyday</p>
                    </div>
                </div>
                <div className="card max-w-[350px] glass col-span-1">
                    <figure>
                        <Image src="/Images/help(3).jpg"
                            width={100}
                            height={100}
                            quality={100}
                            alt=''
                            className='object-cover w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Wide Variety of Designs in Limitless Fabric Options</h2>
                        <p>We have thousands of fabric option across all type of fabrics.

                            We give best price in the world.

                            Get latest update on fabric everyday.</p>

                    </div>
                </div>
                <div className="card max-w-[350px] glass col-span-1">
                    <figure>
                        <Image src="/Images/help(2).jpg"
                            width={100}
                            height={100}
                            quality={100}
                            alt=''
                            className='object-cover w-full max-h-[255px]' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Minimum Order Quantity (MOQ) as Low as 100 Pieces per Style</h2>
                        <p>
                            No overstock issues.

                            All size variant available.

                            We check quality on each phase.</p>

                    </div>
                </div>
                <div className="card max-w-[350px] glass col-span-1">
                    <figure>
                        <Image src="/Images/help(1).jpg"
                            width={100}
                            height={100}
                            quality={100}
                            alt=''
                            className='object-cover w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Design to Delivery fastest.</h2>
                        <p>We present every-stage of supply chain.

                            Secure packaging.

                            Transparent logistic.</p>

                    </div>
                </div>
            </div>
        </>

    )
}

export default HomeHelp