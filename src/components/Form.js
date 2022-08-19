import React from 'react';
import Inputs from './Inputs';

const Form = () => {
    return (
        <form className='px-5 py-10 lg:px-10 lg:py-20 lg:max-w-screen-lg mx-auto flex flex-col gap-4'>
            <Inputs label='Your Name' type='text' name='name'></Inputs>
            <Inputs label='Email' type='email' name='email'></Inputs>
            <Inputs label='Subject' type='text' name='subject'></Inputs>
            <textarea name="" id="" cols="30" rows="5" placeholder='Type a short message here' className='py-2 px-4 bg-light outline-none w-full lg:w-[512px] mx-auto'></textarea>
            <button className='Button mx-auto'>Submit</button>
        </form>
    );
};

export default Form;