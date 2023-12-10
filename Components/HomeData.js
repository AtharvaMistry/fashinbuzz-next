
function HomeData() {
    return (
        <>
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
        </>
    )
}

export default HomeData