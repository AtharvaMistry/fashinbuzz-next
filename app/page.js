
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
        <HomeData />

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
