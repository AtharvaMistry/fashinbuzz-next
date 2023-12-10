import Link from 'next/link'

function Contact() {
    return (
        <>
            <div className="grid text-center place-items-center">
                <p className='text-xl mb-3 text-[#333333] md:text-3xl font-medium'>One Stop Solution For <br />Fashion Manufacturing</p>
                <Link href="/connect">
                    <button className='bg-[#B2C8BA] px-3 py-1 rounded-md max-w-[300px] shrink-0 text-[#333333] md:text-2xl'>Connect with us</button>
                </Link>
            </div>
        </>

    )
}

export default Contact