import React from 'react';
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <div className='p-5 flex flex-col justify-center items-center gap-5 border border-white transform hover:-translate-y-2 ease-in-out duration-200'>
            <h3 className='text-xl font-medium'>- {props.level} -</h3>
            <hr className='w-[40px] h-[1px]' />
            <h1 className='text-3xl font-bold'>{props.quality}</h1>
            <ul className='flex flex-col justify-center items-center gap-2'>
                {
                    props.content.map((item, index) => (
                        <li key={index}>- {item} -</li>

                    ))
                }
            </ul>
            <Link to='/Contact' className='Button'>Book</Link>
        </div>
    );
};

export default Card;