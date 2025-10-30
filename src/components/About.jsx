import React from "react";

const About = () => {
    return (
        <div className="my-24">
            <section id="missions" >
                <div className="text-center"></div>
                <div className="flex flex-col items-center mx-auto my-12 lg:w-[96%]">
                    <div className="flex lg:flex-row flex-col lg:items-start items-center">
                        <img
                            src="public/about-us.png"
                            alt="About Us"
                            className="w-[30rem] lg:float-left lg:ml-10 lg:mr-10 mb-4 border-3 border-[#332e2e] rounded-xl"
                        />
                        <div className="lg:ml-10 lg:mr-10">
                            <h2 className="text-4xl font-bold mb-4">About Us</h2>
                            <p className="text-black text-lg text-justify">
                                At SkillSprint, we are committed to revolutionizing education by
                                providing accessible, flexible, and high-quality learning
                                experiences. Our platform offers a diverse range of expertly
                                crafted courses designed to empower individuals to achieve their
                                personal and professional goals. By leveraging innovative
                                technology and a user-centered approach, we aim to make learning
                                engaging and effective for everyone, anywhere. Join us in
                                transforming education and unlocking your full potential.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-around mt-10 w-full">
                        <div className="text-center">
                            <div className="text-4xl font-bold">10+</div>
                            <div className="text-sm">Courses</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold">10+</div>
                            <div className="text-sm">Certifications</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold">20+</div>
                            <div className="text-sm">Ideas Raised</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold">8+</div>
                            <div className="text-sm">Categories Served</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
