import React from 'react';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';
import Traning from '../components/Traning';

const Training = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar></Navbar>
            <HeroImage heading='TRAINING' desc='Pre-Flight & In-Flight Training.'></HeroImage>
            <Traning></Traning>
            <Footer></Footer>
        </div>
    );
};

export default Training;