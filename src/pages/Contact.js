import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroImage heading='CONTACT' desc='Contact Galaxy Travel.'></HeroImage>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default Contact;