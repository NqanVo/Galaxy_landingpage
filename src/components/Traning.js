import React from 'react';
import moon from '../assets/moon.jpg'
import pod from '../assets/pod.jpg'
import { Link } from 'react-router-dom'
const Traning = () => {
    return (
        <section className='px-5 py-10 lg:px-10 lg:py-20 h-[450px] lg:h-[600px] lg:max-w-screen-lg mx-auto grid grid-cols-2 gap-2 items-center justify-center'>
            <div className="text-center flex flex-col gap-5 justify-center items-center">
                <h1 className='font-bold lg:text-3xl text-xl'>Training</h1>
                <p>Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.</p>
                <Link to='/Contact' className='Button'>Contact</Link>
            </div>
            <div className="flex items-center justify-center">
                <div className="relative w-full h-full mt-[-75px] ml-[20%] lg:mt-[-150px] lg:ml-[150px]">
                    <div className="absolute w-[100px] h-[150px] lg:w-[200px] lg:h-[300px] rounded-lg overflow-hidden border border-white shadow-gray-100 transform rotate-[-10deg] hover:rotate-0 z-[5] ease-in-out duration-200 cursor-pointer"><img src={moon} alt="" className='h-full w-full object-cover' /></div>
                    <div className="absolute w-[100px] h-[150px] lg:w-[200px] lg:h-[300px] rounded-lg overflow-hidden border border-white shadow-gray-100 transform translate-x-10 -translate-y-10 rotate-[30deg] hover:rotate-0 hover:z-20 z-0 ease-in-out duration-200 cursor-pointer"><img src={pod} alt="" className='h-full w-full object-cover' /></div>
                </div>
            </div>
        </section>
    );
};

export default Traning;