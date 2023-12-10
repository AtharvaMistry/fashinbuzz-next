
import Contact from '@/Components/Contact'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="grid">
        <div className="grid text-center place-items-center">
          <p className='text-xl mb-3 text-[#333333] md:text-3xl font-medium'>One Stop Solution For <br />Fashion Manufacturing</p>
          <Link href="/connect">
            <button className='bg-[#B2C8BA] px-3 py-1 rounded-md max-w-[300px] shrink-0 text-[#333333] md:text-2xl hover:drop-shadow-md '>Connect with us</button>
          </Link>
        </div>

        {/* image carousel */}
        {/* <IntroCarousel /> */}
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
        {/* data */}
        {/* <HomeData /> */}
        <div className="grid px-5 md:px-10">
          <div className="stats shadow bg-[#B2C8BA] min-w-full">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <div className="stat-title text-[#333333]">Total Designs</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc text-[#333333]">Almost all the modern & future design</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div className="stat-value text-secondary">Fast delivery</div>
              <div className="stat-desc text-[#333333]">Within few days</div>
            </div>

            <div className="stat">
              <div className="stat-value text-[#333333]">100</div>
              <div className="stat-desc text-secondary">Minimum order quantity</div>
            </div>

          </div>
        </div>

        {/* service */}
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
              <h2 className="font-semibold">Manufacturing</h2>
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

        {/* How can we help? */}
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

        {/* categories */}
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

        {/* faq */}
        <div className="grid my-10 px-5 md:px-10">
          <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
              <p className="p-2 text-sm font-medium tracki text-center uppercase">How it works</p>
              <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
              <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-700">
                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    What is benifit from your side?
                  </summary>
                  <div className="px-4 pb-4">
                    <blockquote className="text-md italic font-semibold text-gray-900 dark:text-white">
                      <p>We have transparent supply chain and have best technology. for D2C fashionbrand, we are one of the top manufacturing service provider in india. we provide omnichannel platform.</p>
                    </blockquote>
                  </div>
                </details>
                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">What is delivery time</summary>
                  <div className="px-4 pb-4">

                    <blockquote className="text-md italic font-semibold text-gray-900 dark:text-white">
                      <p>We build relation by heart with our client , so we take your hurdles.</p>
                    </blockquote>
                  </div>
                </details>
                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">is there customer support available?</summary>
                  <div className="px-4 pb-4 space-y-2">

                    <blockquote className="text-md italic font-semibold text-gray-900 dark:text-white">
                      <p>100 pieces.</p>
                    </blockquote>
                  </div>
                </details>
                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">Payment condition?</summary>
                  <div className="px-4 pb-4 space-y-2">

                    <blockquote className="text-md italic font-semibold text-gray-900 dark:text-white">
                      <p>Any first 3 bill in advance then ww will provide credit facility.</p>
                    </blockquote>
                  </div>
                </details>
                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">what if I received damage peice in delivery?</summary>
                  <div className="px-4 pb-4 space-y-2">

                    <blockquote className="text-md italic font-semibold text-gray-900 dark:text-white">
                      <p>We have claim process.</p>
                    </blockquote>
                  </div>
                </details>
                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">You provide design or not?</summary>
                  <div className="px-4 pb-4 space-y-2">
                    <blockquote className="text-md italic font-semibold text-gray-900 dark:text-white">
                      <p>Yes, we provide design .</p>
                    </blockquote>
                  </div>
                </details>
              </div>
            </div>
          </section>
        </div>

        {/* contact */}
        <Contact />
      </div>


    </>
  )
}
