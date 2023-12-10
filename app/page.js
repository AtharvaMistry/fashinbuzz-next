
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
        <IntroCarousel />

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
        <HomeService />

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
