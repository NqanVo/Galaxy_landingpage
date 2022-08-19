import React from 'react';
import SpaceVideo from '../assets/space.mp4'
import { Link } from 'react-router-dom'
const Video = () => {
    return (
        <section className='relative'>
            <video src={SpaceVideo} autoPlay muted loop className='h-screen object-cover bg-center bg-cover lg:h-auto' />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-4 lg:gap-8">
                <h1 className='text-3xl lg:text-6xl font-bold'>Galaxy Travel</h1>
                <p className='text-xl lg:text-3xl font-extralight'>World's first civilian space travel.</p>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 justify-center">
                    <Link to='/Training'><div className="Button">Training</div></Link>
                    <Link to='/Contact'><div className="Button ButtonLight">Launch</div></Link>
                </div>
            </div>
        </section>
    );
};

export default Video;