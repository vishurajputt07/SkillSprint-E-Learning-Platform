import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-teal-900 w-full mt-10 ">
            <section id="CONTACT ME">
                <div className="flex flex-wrap justify-evenly py-6 px-32">
                    <div className="w-52">
                        <h1 className="text-lg font-bold text-white">Learners</h1>
                        <p className="text-white">Follow us on social media</p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                <FaInstagram className="text-white" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <FaTwitter className="text-white" />
                            </a>
                            <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer">
                                <FaLinkedin className="text-white" />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                <FaFacebook className="text-white" />
                            </a>
                        </div>
                    </div>

                    <div className="w-52">
                        <h3 className="text-lg font-semibold text-white">Explore</h3>
                        <ul className="list-none text-white">
                            <li><a href="#start" className="text-white hover:underline">HOME</a></li>
                            <li><a href="#donate" className="text-white hover:underline">DONATE</a></li>
                            <li><a href="#missions" className="text-white hover:underline">OUR MISSION</a></li>
                            <li><a href="#volunteer" className="text-white hover:underline">VOLUNTEER</a></li>
                            <li><a href="#team" className="text-white hover:underline">TEAM</a></li>
                            <li><a href="#about" className="text-white hover:underline">ABOUT US</a></li>
                            <li><a href="#contact" className="text-white hover:underline">CONTACT</a></li>
                        </ul>
                    </div>

                    <div className="w-52">
                        <h3 className="text-lg font-semibold text-white">Information</h3>
                        <ul className="list-none">
                            <li className="text-white">Privacy Policy</li>
                            <li className="text-white">Membership</li>
                            <li className="text-white">Terms of Services</li>
                        </ul>
                    </div>

                    <div className="w-52">
                        <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
                        <ul className="list-none">
                            <li className="text-white">Address: COER University, Roorkee</li>
                            <li className="text-white">Phone: 7817098XXX</li>
                            <li className="text-white">Email: coeruniversity@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
