import React, { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

function Certificate({ certificateName, certificateCatergory }) {
    const ref = useRef(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return;
        }

        toPng(ref.current, { cacheBust: true, backgroundColor: 'white' })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'certificate.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    }, [ref]);

    return (
        <div className='w-full h-full flex flex-col justify-around items-center my-10'>
            <div
                className='relative w-[43rem] h-[30rem] bg-[url("/certificate.jpg")] bg-cover bg-center'
                ref={ref}
            >
                <h1 className='absolute mt-[12rem] ml-[14rem] font-bold text-4xl italic'>{certificateName}</h1>
                <h1 className='absolute mt-[21rem] ml-[27rem] font-bold text-xl italic text-teal-500'>skillSprint</h1>
                <p className='absolute mt-[15rem] ml-[25rem] font-bold text-[15px] italic'>{certificateCatergory}</p>
            </div>
            <button
                className='my-10 bg-red-500 p-3 rounded-lg text-white font-semibold'
                onClick={onButtonClick}
            >
                Download Certificate!
            </button>
        </div>
    );
}

export default Certificate;
