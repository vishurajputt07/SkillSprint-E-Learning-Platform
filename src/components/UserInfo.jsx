import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserInfo({ handleOnSubmit, nameValue, phoneValue, emailValue, categoryValue }) {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleOnSubmit();


        const category = categoryValue.current.value;

        console.log("Name from UserInfo:", nameValue.current.value);
        console.log("Category from UserInfo:", category);

        if (category === "HTML Course - For Beginners") {
            navigate('/htmlCourse');
        }
        else if (category === "CSS Course - Styling Web Pages") {
            navigate('/cssCourse');
        }
        else if (category === "JavaScript Course Outline") {
            navigate('/javaScriptCourse');
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-lg border-[1px] border-blue-600 shadow-blue-500 rounded-lg mt-5">
            <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">User Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        ref={nameValue}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        ref={phoneValue}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        ref={emailValue}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="category" className="block text-gray-700 font-medium">Course Category</label>
                    <select
                        id="category"
                        name="category"
                        ref={categoryValue}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    >
                        <option value="" disabled>Select a category</option>
                        <option value="HTML Course - For Beginners">HTML Course - For Beginners</option>
                        <option value="CSS Course - Styling Web Pages">CSS Course - Styling Web Pages</option>
                        <option value="JavaScript Course Outline">JavaScript Course Outline</option>
                        <option value="marketing">Marketing</option>
                        <option value="business">Business</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default UserInfo;
