import React from 'react';
import JavaScriptQuiz from './JavaScriptQuiz';
import Certificate from './Certificate';
import ReactPlayer from 'react-player'

function JavaScriptCourse({ userData }) {
    return (
        <div className='w-full'>
            <div className='flex justify-center'>
                <h1 className='text-xl my-5 font-semibold'>Welcome! {userData.userName} to {userData.category}</h1>
            </div>
            <div className="p-6 mx-20 rounded-2xl shadow-2xl shadow-teal-400">
                <h1 className="text-3xl font-bold mb-4">JavaScript Course Outline</h1>

                {/* 1 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">1: Introduction to JavaScript</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 1.1: What is JavaScript?</li>
                        <ul className="list-decimal pl-6">
                            <li>History and evolution</li>
                            <li>Role in web development</li>
                            <li>JavaScript vs other languages</li>
                        </ul>
                        <li>Lesson 1.2: Setting Up JavaScript</li>
                        <ul className="list-decimal pl-6">
                            <li>Including JavaScript in HTML</li>
                            <li>Using external scripts</li>
                        </ul>
                        <li>Lesson 1.3: JavaScript Basics</li>
                        <ul className="list-decimal pl-6">
                            <li>Variables and data types</li>
                            <li>Operators and expressions</li>
                            <li>Basic syntax and structures</li>
                        </ul>
                    </ul>
                </div>

                {/* 2 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">2: Control Flow</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 2.1: Conditional Statements</li>
                        <ul className="list-decimal pl-6">
                            <li>if, else if, else</li>
                            <li>Switch statements</li>
                        </ul>
                        <li>Lesson 2.2: Loops</li>
                        <ul className="list-decimal pl-6">
                            <li>for, while, do-while</li>
                            <li>Breaking out of loops</li>
                        </ul>
                    </ul>
                </div>

                {/* 3 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">3: Functions</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 3.1: Defining Functions</li>
                        <ul className="list-decimal pl-6">
                            <li>Function declarations and expressions</li>
                            <li>Parameters and return values</li>
                        </ul>
                        <li>Lesson 3.2: Advanced Function Concepts</li>
                        <ul className="list-decimal pl-6">
                            <li>Closures and scope</li>
                            <li>Arrow functions</li>
                        </ul>
                    </ul>
                </div>

                {/* 4 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">4: Objects and Arrays</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 4.1: Working with Objects</li>
                        <ul className="list-decimal pl-6">
                            <li>Creating and accessing object properties</li>
                            <li>Methods and 'this'</li>
                        </ul>
                        <li>Lesson 4.2: Working with Arrays</li>
                        <ul className="list-decimal pl-6">
                            <li>Creating and manipulating arrays</li>
                            <li>Array methods and iteration</li>
                        </ul>
                    </ul>
                </div>

                {/* 5 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">5: DOM Manipulation</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 5.1: Understanding the DOM</li>
                        <ul className="list-decimal pl-6">
                            <li>What is the Document Object Model?</li>
                            <li>Traversing and selecting elements</li>
                        </ul>
                        <li>Lesson 5.2: Modifying the DOM</li>
                        <ul className="list-decimal pl-6">
                            <li>Adding, removing, and updating elements</li>
                            <li>Event handling and listeners</li>
                        </ul>
                    </ul>
                </div>

                {/* 6 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">6: Asynchronous JavaScript</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 6.1: Introduction to Asynchronous Programming</li>
                        <ul className="list-decimal pl-6">
                            <li>Understanding asynchronous operations</li>
                            <li>Callbacks</li>
                        </ul>
                        <li>Lesson 6.2: Promises</li>
                        <ul className="list-decimal pl-6">
                            <li>Creating and handling promises</li>
                            <li>Chaining promises</li>
                        </ul>
                        <li>Lesson 6.3: Async/Await</li>
                        <ul className="list-decimal pl-6">
                            <li>Using async and await</li>
                            <li>Handling errors with try/catch</li>
                        </ul>
                    </ul>
                </div>

                {/* 7 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">7: Error Handling and Debugging</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 7.1: Handling Errors</li>
                        <ul className="list-decimal pl-6">
                            <li>Types of errors in JavaScript</li>
                            <li>Using try/catch for error handling</li>
                        </ul>
                        <li>Lesson 7.2: Debugging Techniques</li>
                        <ul className="list-decimal pl-6">
                            <li>Using console.log and breakpoints</li>
                            <li>Debugging tools in browsers</li>
                        </ul>
                    </ul>
                </div>

                {/* 8 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">8: JavaScript Libraries and Frameworks</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 8.1: Introduction to JavaScript Libraries</li>
                        <ul className="list-decimal pl-6">
                            <li>Overview of popular libraries (jQuery, Lodash)</li>
                            <li>When to use libraries</li>
                        </ul>
                        <li>Lesson 8.2: Introduction to JavaScript Frameworks</li>
                        <ul className="list-decimal pl-6">
                            <li>Overview of popular frameworks (React, Angular, Vue)</li>
                            <li>Choosing the right framework for a project</li>
                        </ul>
                    </ul>
                </div>

                {/* 9 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">9: Testing and Deployment</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 9.1: Testing JavaScript Code</li>
                        <ul className="list-decimal pl-6">
                            <li>Introduction to testing frameworks (Jest, Mocha)</li>
                            <li>Writing unit tests</li>
                        </ul>
                        <li>Lesson 9.2: Deploying JavaScript Applications</li>
                        <ul className="list-decimal pl-6">
                            <li>Introduction to deployment options</li>
                            <li>Deploying to popular platforms (Netlify, Vercel)</li>
                        </ul>
                    </ul>
                </div>

                {/* 10 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">10: Final Project</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 10.1: Building a Complete Application</li>
                        <ul className="list-decimal pl-6">
                            <li>Applying all JavaScript concepts learned</li>
                            <li>Project walkthrough: building a web application</li>
                        </ul>
                    </ul>
                </div>
                <div className="mb-6 w-full flex justify-center">
                    <ReactPlayer url='https://youtu.be/wRNinF7YQqQ?si=J6anAqyONU_SVRJw' />
                </div>
                <JavaScriptQuiz />
                <Certificate certificateName={userData.userName} certificateCatergory={"JavaScript Course Outline"} />
            </div>
        </div>
    );
}

export default JavaScriptCourse;
