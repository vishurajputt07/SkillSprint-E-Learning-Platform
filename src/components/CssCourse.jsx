import React from 'react';
import CssQuiz from './CssQuiz';
import Certificate from './Certificate';

import ReactPlayer from 'react-player'

function CssCourse({ userData }) {
    return (
        <div className='w-full'>
            <div className='flex justify-center'>
                <h1 className='text-xl my-5 font-semibold'>Welcome! {userData.userName} to {userData.category}</h1>
            </div>
            <div className="p-6 mx-20 rounded-2xl shadow-2xl shadow-teal-400">
                <h1 className="text-3xl font-bold mb-4">CSS Course Outline</h1>

                {/* 1 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">1: Introduction to CSS</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 1.1: What is CSS?</li>
                        <ul className="list-decimal pl-6">
                            <li>Definition of CSS (Cascading Style Sheets)</li>
                            <li>Role of CSS in web design</li>
                            <li>Overview of CSS syntax and selectors</li>
                        </ul>
                        <li>Lesson 1.2: Setting Up CSS</li>
                        <ul className="list-decimal pl-6">
                            <li>Linking CSS to HTML</li>
                            <li>Inline, internal, and external styles</li>
                        </ul>
                        <li>Lesson 1.3: CSS Basics</li>
                        <ul className="list-decimal pl-6">
                            <li>CSS rules and declarations</li>
                            <li>Selectors: element, class, and ID</li>
                            <li>Understanding specificity</li>
                        </ul>
                    </ul>
                </div>

                {/* 2 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">2: CSS Box Model</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 2.1: Understanding the Box Model</li>
                        <ul className="list-decimal pl-6">
                            <li>Content, padding, border, and margin</li>
                            <li>Box-sizing property</li>
                        </ul>
                        <li>Lesson 2.2: Layout Techniques</li>
                        <ul className="list-decimal pl-6">
                            <li>Positioning: static, relative, absolute, fixed</li>
                            <li>Display: block, inline, inline-block</li>
                            <li>Float and clear</li>
                        </ul>
                    </ul>
                </div>

                {/* 3 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">3: CSS Flexbox</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 3.1: Introduction to Flexbox</li>
                        <ul className="list-decimal pl-6">
                            <li>Understanding flex containers and items</li>
                            <li>Flex-direction, flex-wrap, and flex-flow</li>
                        </ul>
                        <li>Lesson 3.2: Aligning Items</li>
                        <ul className="list-decimal pl-6">
                            <li>Justify-content, align-items, align-content</li>
                            <li>Align-self</li>
                        </ul>
                    </ul>
                </div>

                {/* 4 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">4: CSS Grid</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 4.1: Introduction to CSS Grid</li>
                        <ul className="list-decimal pl-6">
                            <li>Understanding grid containers and items</li>
                            <li>Defining grid columns and rows</li>
                        </ul>
                        <li>Lesson 4.2: Grid Layout Techniques</li>
                        <ul className="list-decimal pl-6">
                            <li>Grid-template-columns, grid-template-rows</li>
                            <li>Grid-area, grid-column, grid-row</li>
                        </ul>
                    </ul>
                </div>

                {/* 5 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">5: Responsive Design</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 5.1: Media Queries</li>
                        <ul className="list-decimal pl-6">
                            <li>Introduction to media queries</li>
                            <li>Creating responsive layouts</li>
                        </ul>
                        <li>Lesson 5.2: Mobile-First Design</li>
                        <ul className="list-decimal pl-6">
                            <li>Principles of mobile-first design</li>
                            <li>Using viewport units</li>
                        </ul>
                    </ul>
                </div>

                {/* 6 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">6: Advanced CSS Techniques</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 6.1: CSS Variables</li>
                        <ul className="list-decimal pl-6">
                            <li>Introduction to CSS custom properties</li>
                            <li>Using variables for theming</li>
                        </ul>
                        <li>Lesson 6.2: CSS Transitions and Animations</li>
                        <ul className="list-decimal pl-6">
                            <li>Creating smooth transitions</li>
                            <li>Keyframe animations</li>
                        </ul>
                    </ul>
                </div>

                {/* 7 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">7: Best Practices and Project</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 7.1: Writing Clean and Maintainable CSS</li>
                        <ul className="list-decimal pl-6">
                            <li>Organizing CSS files</li>
                            <li>Using comments effectively</li>
                        </ul>
                        <li>Lesson 7.2: Building Your First CSS Project</li>
                        <ul className="list-decimal pl-6">
                            <li>Creating a responsive website layout</li>
                            <li>Project walkthrough: styling a portfolio site or blog</li>
                        </ul>
                    </ul>
                </div>

                {/* 8 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">8: CSS Frameworks</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 8.1: Introduction to CSS Frameworks</li>
                        <ul className="list-decimal pl-6">
                            <li>Overview of popular frameworks (Bootstrap, Tailwind CSS)</li>
                            <li>Advantages and disadvantages of using frameworks</li>
                        </ul>
                        <li>Lesson 8.2: Using Bootstrap</li>
                        <ul className="list-decimal pl-6">
                            <li>Setting up Bootstrap in a project</li>
                            <li>Using Bootstrap grid system and components</li>
                        </ul>
                        <li>Lesson 8.3: Using Tailwind CSS</li>
                        <ul className="list-decimal pl-6">
                            <li>Setting up Tailwind CSS in a project</li>
                            <li>Using utility classes for styling</li>
                        </ul>
                    </ul>
                </div>

                {/* 9 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">9: CSS Preprocessors</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 9.1: Introduction to CSS Preprocessors</li>
                        <ul className="list-decimal pl-6">
                            <li>Overview of preprocessors (Sass, LESS)</li>
                            <li>Advantages of using preprocessors</li>
                        </ul>
                        <li>Lesson 9.2: Using Sass</li>
                        <ul className="list-decimal pl-6">
                            <li>Setting up Sass in a project</li>
                            <li>Variables, nesting, and mixins</li>
                        </ul>
                        <li>Lesson 9.3: Using LESS</li>
                        <ul className="list-decimal pl-6">
                            <li>Setting up LESS in a project</li>
                            <li>Variables, nesting, and mixins</li>
                        </ul>
                    </ul>
                </div>

                {/* 10 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2">10: CSS in Practice</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 10.1: Real-World CSS Challenges</li>
                        <ul className="list-decimal pl-6">
                            <li>Common design patterns and solutions</li>
                            <li>Handling cross-browser compatibility</li>
                        </ul>
                        <li>Lesson 10.2: Final Project</li>
                        <ul className="list-decimal pl-6">
                            <li>Building a complete web application or website</li>
                            <li>Applying all CSS concepts learned in the course</li>
                        </ul>
                    </ul>
                </div>
                <div className="mb-6 w-full flex justify-center">
                    <ReactPlayer url='https://youtu.be/wRNinF7YQqQ?si=J6anAqyONU_SVRJw' />
                </div>
                <CssQuiz />
                <Certificate certificateName={userData.userName} certificateCatergory={"CSS Course - Styling Web Pages"} />
            </div>
        </div>
    );
}

export default CssCourse;
