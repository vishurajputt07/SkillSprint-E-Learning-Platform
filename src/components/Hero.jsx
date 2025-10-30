import React from 'react'

function Hero() {
    return (
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8">
            <div className="content text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">
                    Anytime Anywhere
                    <br />
                    Learn on your
                    <br />
                    Suitable Schedule
                </h1>
                <p className="text-gray-600 mb-4 w-[45rem] italic">
                    Unlock limitless learning opportunities with flexible courses designed for your busy schedule. Whether you're at home or on the go, gain new skills and boost your career anytime, anywhere. Discover courses tailored to help you succeed in today's fast-paced world!
                </p>
                <div className="search-container flex justify-center md:justify-start items-center">
                    <input type="text" placeholder="Search" className="p-2 border border-gray-300 rounded-l-md" />
                    <button className="bg-teal-500 text-white p-2 rounded-r-md hover:bg-teal-600 ml-2">
                        Search
                    </button>
                </div>
            </div>
            <div className="image-container w-full md:w-1/2 flex justify-center items-center">
                <img src="public/hero-img1.png" alt="Learn on your suitable schedule" className="w-full h-auto" />
            </div>
        </div>
    )
}

export default Hero