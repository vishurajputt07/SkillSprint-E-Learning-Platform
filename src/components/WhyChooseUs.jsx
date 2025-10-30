import React from "react";
import { IoBookSharp } from "react-icons/io5";
import { IoMdChatbubbles } from "react-icons/io";
import { GrCertificate } from "react-icons/gr";

const WhyChooseUs = () => {
    return (
        <div className="flex justify-center my-10">

            <div className="w-[95%] flex flex-col ">
                <section id="missions" className="">
                    <div className="text-center col-md-offset-2 col-md-8 col-sm-12"></div>
                    <div className="mx-9 my-12 lg:w-[96%]">
                        <img
                            src="public/why-choose-us.png"
                            alt="Why Choose Us"
                            className="w-[30rem]  float-right ml-10 mr-10 mb-4 border-3 border-[#332e2e] rounded-xl"
                        />
                        <div className="text-box">
                            <h1 className="text-4xl font-bold my-10">Why Choose Us</h1>
                            <p className="text-black text-lg text-justify mb-1">
                                Choosing our e-learning website means selecting a platform dedicated to delivering high-quality, accessible education tailored to your needs. Our user-friendly interface and diverse course offerings ensure a seamless learning experience, while our expert instructors provide valuable insights and support. With flexible scheduling, interactive content, and regular updates, we make it easy to stay engaged and progress at your own pace. Invest in your future with our commitment to excellence in online education.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="w-full  flex justify-aound">
                    <div className="flex justify-evenly items-center pt-28 ">
                        <div className="text-center">
                            <IoBookSharp className="w-10 h-10 text-teal-500 mx-auto" />
                            <p className="text-black text-lg mt-4 font-semibold">
                                Extensive Courses
                            </p>
                            <p className="text-gray-600 mt-2">
                                Our platform offers a wide variety of courses, carefully designed to provide in-depth knowledge across different industries and domains. Learn at your own pace and grow your skills with expert-led content.
                            </p>
                        </div>
                        <div className="text-center">
                            <IoMdChatbubbles className="w-10 h-10 text-teal-500 mx-auto" />
                            <p className="text-black text-lg mt-4 font-semibold">
                                Expert Support
                            </p>
                            <p className="text-gray-600 mt-2">
                                Get assistance whenever you need it. Our team of industry experts is available to help guide you through your learning journey and answer any questions that arise.
                            </p>
                        </div>
                        <div className="text-center">
                            <GrCertificate className="w-10 h-10 text-teal-500 mx-auto" />
                            <p className="text-black text-lg mt-4 font-semibold">
                                Certified Programs
                            </p>
                            <p className="text-gray-600 mt-2">
                                Upon successful completion of our programs, you will receive recognized certifications that can help enhance your professional profile and open up new career opportunities.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default WhyChooseUs;
