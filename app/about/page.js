import Link from "next/link"

function page() {
    return (
        <>
            <div className="grid px-5 text-center md:px-10">
                <p className="text-4xl font-semibold">Our Journey - From Fabrics to Digitise Fashion</p>
                <p class="mb-3 text-[#464646] mt-12  dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">For the past five years, FashinBuzz has been a trusted name in the textile industry, offering top-notch design, manufacturing, and delivery services. We've been the driving force behind many successful fashion endeavors, and now, we're excited to take our expertise online.</p>
                <p class="text-[#464646] dark:text-gray-400">Our story begins with a passion for textiles and a commitment to quality. Over the years, we've honed our skills, partnered with talented designers, and built a robust manufacturing and delivery network that ensures excellence every step of the way.</p>
                <p class="text-[#464646] dark:text-gray-400">Today, we're proud to introduce our online platform, where you can experience the same dedication to quality and innovation that has defined us for half a decade. Join us on this new chapter of our journey as we bring fabrics to life and fashion to your doorstep.</p>
                <p class="text-[#464646] dark:text-gray-400">Explore our website to discover the endless possibilities we offer, and be a part of our story as we continue to weave fashion dreams into reality.</p>
            </div>
            <div className="grid grid-cols-1 gap-5 px-5 my-10  md:grid-cols-2 md:px-10">
                <div className="card  bg-[#D2E3C8] shadow-xl sm:w-96">
                    <div className="card-body">
                        <h2 className="card-title">VISION</h2>
                        <p>Our vision at FashinBuzz is to be more than just a textile company; we aim to be the embodiment of trust in the world of fashion. We believe that trust is the thread that binds every aspect of our business, from design to delivery.</p>
                    </div>
                </div>
                <div className="card  bg-[#D2E3C8] shadow-xl sm:w-96">
                    <div className="card-body">
                        <h2 className="card-title">MISSION</h2>
                        <p>At FashinBuzz, our mission is to elevate the fashion experience for our customers, partners, and communities.To digitise textile supply chain and get sustainable growth.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 px-5 border-dotted border-t-2 border-b-2 border-[#86A789] sm:grid-cols-2 sm:px-10">
                <section className="md:px-6">
                    <div className="container max-w-xl mx-auto">
                        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">

                            <blockquote className="max-w-lg text-lg italic font-medium text-center">"Meet Abhay Raviya(CEO)a mechanical engineer with a deep-rooted passion for textiles, leads our journey at FashinBuzz. With a wealth of knowledge in textile technology and a keen eye for cloth design manufacturing, Abhay brings expertise and dedication to every aspect of our business. His commitment to quality and innovation forms the bedrock of our company's success. Trust in his vision to deliver excellence in every thread"</blockquote>
                            <div className="text-center dark:text-gray-400">
                                <p> Abhay Raviya</p>
                                <p>CEO of Company Co.</p>
                            </div>
                            <div className="flex space-x-2">
                                <button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full dark:bg-gray-50"></button>
                                <button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
                                <button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
                                <button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="md:px-6">
                    <div className="container max-w-xl mx-auto">
                        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">

                            <blockquote className="max-w-lg text-lg italic font-medium text-center">"Meet Anubhav(CTO), a textile engineer by degree and a entreprenuer by heart, leads the charge as our Chief Technology Officer (CTO). With a profound understanding of AI and technology, he infuses innovation into every aspect of our operations. in ge's vision to integrate cutting-edge technology seamlessly into our processes, making your experience with us truly exceptional."</blockquote>
                            <div className="text-center dark:text-gray-400">
                                <p>Anubhav vasistha</p>
                                <p>CTO of Company Co.</p>
                            </div>
                            <div className="flex space-x-2">
                                <button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full dark:bg-gray-50"></button>
                                <button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
                                <button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
                                <button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="grid text-center mt-10 place-items-center">
                <p className='text-xl mb-3 text-[#333333] md:text-3xl font-medium'>One Stop Solution For <br />Fashion Manufacturing</p>
                <Link href="/connect">
                    <button className='bg-[#B2C8BA] px-3 py-1 rounded-md max-w-[300px] shrink-0 text-[#333333] md:text-2xl hover:drop-shadow-md '>Connect with us</button>
                </Link>
            </div>
        </>
    )
}

export default page