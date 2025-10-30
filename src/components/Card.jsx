import React from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Card({ courseName, courseDescription, courseImage, lessons }) {
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate('/userInfo');
    }
    return (
        <div className="w-[23rem] h-[26rem] bg-teal-900 rounded-xl flex flex-col items-center overflow-hidden hover:shadow-2xl shadow-black">
            <div
                className="w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl"
                style={{
                    backgroundImage: `url(${courseImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>
            <div className="text-white flex flex-col flex-wrap my-0 mx-5 ">
                <h1 className="text-xl mt-2 font-bold">{courseName}</h1>
                <p className="text-[12px] ">
                    {courseDescription}
                </p>
                <div className="font-semibold text-lg flex justify-between items-center mt-2">
                    <p className="">{lessons}</p>
                    <button onClick={handleOnClick} className="py-1 px-4 bg-yellow-500 rounded-full self-end hover:bg-orange-500">
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
