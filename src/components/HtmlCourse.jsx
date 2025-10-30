import React from 'react';
import HtmlQuiz from './HtmlQuiz';
import Certificate from './Certificate';
import ReactPlayer from 'react-player'


function HtmlCourse({ userData }) {

    return (
        <div className='w-full  '>
            <div className='flex justify-center'>
                <h1 className=' text-xl my-5 font-semibold' >Welcome! {userData.userName} to {userData.category} </h1>
            </div>
            <div className="p-6 mx-20 rounded-2xl shadow-2xl shadow-teal-400 ">
                <h1 className="text-3xl font-bold mb-4">HTML Course Outline</h1>

                {/*  1 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2"> 1: Introduction to HTML</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 1.1: What is HTML?</li>
                        <ul className="list-decimal pl-6">
                            <li>Definition of HTML (HyperText Markup Language)</li>
                            <li>Role of HTML in web development</li>
                            <li>Overview of how websites are built using HTML</li>
                        </ul>
                        <li>Lesson 1.2: Setting Up the Development Environment</li>
                        <ul className="list-decimal pl-6">
                            <li>Installing a text editor (VS Code, Sublime, etc.)</li>
                            <li>Setting up your first HTML file: index.html</li>
                        </ul>
                        <li>Lesson 1.3: Basic HTML Structure</li>
                        <ul className="list-decimal pl-6">
                            <li>HTML boilerplate</li>
                            <li>Understanding tags: &lt;html&gt;, &lt;head&gt;, &lt;body&gt;</li>
                            <li>Doctype and HTML versions</li>
                        </ul>
                    </ul>
                </div>

                {/*  2 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2"> 2: Basic HTML Elements</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 2.1: Text Elements</li>
                        <ul className="list-decimal pl-6">
                            <li>Headings (&lt;h1&gt; to &lt;h6&gt;)</li>
                            <li>Paragraphs (&lt;p&gt;)</li>
                            <li>Text formatting: bold (&lt;strong&gt;), italic (&lt;em&gt;)</li>
                        </ul>
                        <li>Lesson 2.2: Links and Images</li>
                        <ul className="list-decimal pl-6">
                            <li>Adding hyperlinks (&lt;a href=""&gt;)</li>
                            <li>Linking internal vs external pages</li>
                            <li>Inserting images (&lt;img src="" alt=""&gt;)</li>
                        </ul>
                        <li>Lesson 2.3: Lists</li>
                        <ul className="list-decimal pl-6">
                            <li>Unordered lists (&lt;ul&gt; and &lt;li&gt;)</li>
                            <li>Ordered lists (&lt;ol&gt; and &lt;li&gt;)</li>
                            <li>Nested lists</li>
                        </ul>
                        <li>Lesson 2.4: Tables</li>
                        <ul className="list-decimal pl-6">
                            <li>Creating tables (&lt;table&gt;, &lt;tr&gt;, &lt;td&gt;, &lt;th&gt;)</li>
                            <li>Adding table headers and footers</li>
                            <li>Styling tables with basic attributes</li>
                        </ul>
                    </ul>
                </div>
                {/*  3 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2"> 3: Semantic HTML</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 3.1: Importance of Semantic HTML</li>
                        <ul className="list-decimal pl-6">
                            <li>Why semantic HTML is crucial for accessibility and SEO</li>
                            <li>Introduction to semantic tags</li>
                        </ul>
                        <li>Lesson 3.2: Common Semantic Tags</li>
                        <ul className="list-decimal pl-6">
                            <li>&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;</li>
                            <li>&lt;section&gt;, &lt;article&gt;, &lt;aside&gt;</li>
                        </ul>
                        <li>Lesson 3.3: Practical Usage of Semantic HTML</li>
                        <ul className="list-decimal pl-6">
                            <li>Building a simple webpage using only semantic tags</li>
                            <li>Comparing non-semantic and semantic HTML structures</li>
                        </ul>
                    </ul>
                </div>

                {/*  4 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2"> 4: Forms and Inputs</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 4.1: Introduction to Forms</li>
                        <ul className="list-decimal pl-6">
                            <li>Basic form structure: &lt;form&gt;, &lt;input&gt;, &lt;label&gt;</li>
                            <li>Common input types: text, email, password</li>
                        </ul>
                        <li>Lesson 4.2: Form Elements</li>
                        <ul className="list-decimal pl-6">
                            <li>Radio buttons, checkboxes, dropdowns (&lt;select&gt;)</li>
                            <li>Submit buttons and resetting forms</li>
                        </ul>
                        <li>Lesson 4.3: Form Validation</li>
                        <ul className="list-decimal pl-6">
                            <li>HTML5 form validation features</li>
                            <li>Using attributes like required, minlength, pattern</li>
                            <li>Understanding how browsers handle form validation</li>
                        </ul>
                    </ul>
                </div>

                {/*  5 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2"> 5: Multimedia in HTML</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 5.1: Embedding Audio</li>
                        <ul className="list-decimal pl-6">
                            <li>Adding audio files using &lt;audio&gt;</li>
                            <li>Supported formats and fallback options</li>
                            <li>Audio controls and autoplay features</li>
                        </ul>
                        <li>Lesson 5.2: Embedding Video</li>
                        <ul className="list-decimal pl-6">
                            <li>Adding videos using &lt;video&gt;</li>
                            <li>Video controls, autoplay, and loop features</li>
                        </ul>
                        <li>Lesson 5.3: Embedding External Content</li>
                        <ul className="list-decimal pl-6">
                            <li>Using &lt;iframe&gt; to embed videos, maps, etc.</li>
                            <li>Understanding iframe security concerns</li>
                        </ul>
                    </ul>
                </div>

                {/*  6 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2"> 6: Advanced HTML Techniques</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 6.1: HTML5 APIs</li>
                        <ul className="list-decimal pl-6">
                            <li>Introduction to HTML5 features: geolocation, local storage, etc.</li>
                            <li>Practical use cases and examples</li>
                        </ul>
                        <li>Lesson 6.2: Accessibility in HTML</li>
                        <ul className="list-decimal pl-6">
                            <li>Making web content accessible with ARIA attributes</li>
                            <li>Best practices for writing accessible HTML</li>
                        </ul>
                        <li>Lesson 6.3: SEO and HTML</li>
                        <ul className="list-decimal pl-6">
                            <li>Basic SEO techniques using meta tags</li>
                            <li>Importance of structured data</li>
                            <li>Optimizing HTML for search engines</li>
                        </ul>
                    </ul>
                </div>

                {/*  7 */}
                <div className="mb-6 mx-20 rounded-2xl shadow-lg shadow-teal-400 p-5 bg-teal-100 border-[1px] border-teal-500">
                    <h2 className="text-2xl font-bold mb-2"> 7: Best Practices and Project</h2>
                    <ul className="list-disc pl-6">
                        <li>Lesson 7.1: Writing Clean and Maintainable HTML</li>
                        <ul className="list-decimal pl-6">
                            <li>Consistent indentation and commenting</li>
                            <li>Avoiding deprecated tags and attributes</li>
                        </ul>
                        <li>Lesson 7.2: Building Your First HTML Website</li>
                        <ul className="list-decimal pl-6">
                            <li>Creating a multi-page website</li>
                            <li>Project walkthrough: a portfolio site or blog</li>
                            <li>Responsive design considerations with HTML</li>
                        </ul>
                    </ul>
                </div>

                <div className="mb-6 w-full flex justify-center">
                    <ReactPlayer url='https://youtu.be/HD13eq_Pmp8?si=xhD5sod-55iWU4K5' />
                </div>

                <HtmlQuiz />

                <Certificate certificateName={userData.userName} certificateCatergory={"HTML Course - For Beginners"} />

            </div>
        </div>
    );
}

export default HtmlCourse;
