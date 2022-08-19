import React from 'react';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import ListCards from '../components/ListCards';
import Navbar from '../components/Navbar';

const Pricing = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroImage heading='PRICING' desc='Choose your trip.'></HeroImage>
            <ListCards></ListCards>
            <Footer></Footer>
        </div>
    );
};

export default Pricing;