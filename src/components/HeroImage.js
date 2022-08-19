import React from 'react';
import heroimg from '../assets/heroImg.jpg'

const HeroImage = (props) => {
    return (
        <section className='w-full h-[100vh] bg-black'>
            <img src={heroimg} alt="" className='h-full w-full object-cover bg-center bg-cover opacity-70' />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-4 lg:gap-8">
                <h1 className='text-3xl lg:text-6xl font-bold'>{props.heading}</h1>
                <p className='text-xl lg:text-3xl font-extralight'>{props.desc}</p>
            </div>
        </section>
    );
};
export default HeroImage;