import React from 'react';
import Card from './Card';

function Course() {
    return (
        <div className='w-full'>
            <div className='mx-20 my-5'>
                <h1 className='capitalize font-bold text-4xl text-teal-500'>Our Popular Courses</h1>
                <p className='mt-2 text-lg text-gray-700 w-[50rem] italic'>
                    Explore our diverse range of courses designed to enhance your skills and boost your career. From cutting-edge technology to creative arts, our courses offer in-depth knowledge, practical insights, and hands-on experience. Whether you're looking to advance in your current field or venture into a new industry, our expert-led courses are tailored to help you achieve your goals. Enroll today and start your journey toward success!
                </p>

                <div className='w-full flex flex-wrap my-8 gap-10 '>
                    {/* HTML Course */}
                    <Card
                        courseName="HTML Course - For Beginners"
                        courseDescription="Dive into the fundamentals of HTML with our beginner-friendly course. Learn how to create and structure web pages, understand HTML elements and attributes, and build a strong foundation for web development. This course is perfect for anyone new to coding or looking to refresh their skills. Start building your web development career today!"
                        courseImage="/web-design.png"
                        lessons="7 Lessons"

                    />

                    {/* CSS Course */}
                    <Card
                        courseName="CSS Course - Styling Web Pages"
                        courseDescription="Master the art of web design with our CSS course. Learn how to style and layout web pages with CSS, from basic selectors to advanced techniques like Flexbox and Grid. This course will equip you with the skills to create visually appealing, responsive designs and enhance your web development toolkit."
                        courseImage={"https://cdn.prod.website-files.com/64a6f67b79a80fd9ff31ca7a/651861925d86eb8b1c8d90b0_651189e081964b9002b1e6d1_64c2586cc3eccac8b6a2e3a9_tb.png"}
                        lessons="10 Lessons"
                    />

                    {/* JavaScript Course */}
                    <Card
                        courseName="JavaScript Course - Interactive Programming"
                        courseDescription="Unleash the power of interactive web development with our JavaScript course. Learn how to add dynamic features, handle events, and manipulate the DOM to create engaging web experiences. This course covers essential JavaScript concepts and advanced techniques."
                        courseImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4oO1yc2Nktqr2-hAltLQ3oTocSNGLK1Eyw&s"}
                        lessons="10 Lessons"

                    />
                </div>
            </div>
        </div>
    );
}

export default Course;
