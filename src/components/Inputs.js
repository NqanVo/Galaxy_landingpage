import React from 'react';

const Inputs = (props) => {
    return (
        <div className='flex flex-col gap-1 w-full lg:w-[512px] mx-auto'>
            <span className='text-sm lg:text-base'>{props.label}</span>
            <input className='py-2 px-4 bg-light outline-none' type={props.type} name={props.name} value={props.value} placeholder={props.placeholder} />
        </div>
    );
};

export default Inputs;