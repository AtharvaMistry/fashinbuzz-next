
import Contact from '@/Components/Contact'
import HomeData from '@/Components/HomeData'
import HomeFaq from '@/Components/HomeFaq'
import HomeHelp from '@/Components/HomeHelp'
import HomeService from '@/Components/HomeService'
import IntroCarousel from '@/Components/IntroCarousel'
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
        {/* <HomeService /> */}
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
        <HomeHelp />

        {/* categories */}


        {/* faq */}
        <HomeFaq />

        {/* contact */}
        <Contact />
      </div>
    </>
  )
}
