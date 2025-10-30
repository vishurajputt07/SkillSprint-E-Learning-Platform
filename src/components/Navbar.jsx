import React from 'react'
import { Link } from 'react-router-dom';
import { RiGraduationCapFill } from "react-icons/ri";

function Navbar() {
    return (
        <div>
            <header className="py-4 text-center ">
                <div className="container mx-auto flex justify-between items-center px-4 ">
                    <a href="# " className='flex items-center'>
                        <h1 className="text-2xl font-bold text-gray-800">Skill<span className='text-teal-500'>Sprint</span></h1><RiGraduationCapFill className='w-7 h-10 ml-2 text-teal-500' />
                    </a>

                    <ul className="text-gray-800 flex space-x-4 font-semibold ">
                        <li href="#" className="hover:underline hover:text-teal-500"><Link to="/">Home</Link></li>
                        <li href="#" className="hover:underline hover:text-teal-500"><Link to="/about">About Us</Link></li>
                        <li href="#" className="hover:underline hover:text-teal-500"><Link to="/course">Courses</Link></li>
                        <li href="#" className="hover:underline hover:text-teal-500">Pages</li>
                        <li href="#" className="hover:underline hover:text-teal-500">Blog</li>
                        <li href="#" className="hover:underline hover:text-teal-500">+91 7817098140</li>
                    </ul>
                </div>
            </header>

        </div>
    );
}

export default Navbar