import React from 'react';
import backgroundImage from '../assets/amaze.png';
import line from '../assets/Line-1.png';

const Amaze = () => {
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '20rem',
    };

    return (
        <div style={divStyle} className='flex max-md:justify-center max-md:items-center w-screen'>
            <section className='relative flex h-[45%] mt-[8rem] md:ml-[15rem] max-md:self-center'>
            <h2 className='text-5xl font-bold text-white volkhov-bold'>
                Let’s make your <br />
                next holiday amazing
            </h2>
            <img src={line} alt="Decorative Line" className='absolute -right-4 bottom-0'/>
            </section>
        </div>
    );
};

export default Amaze;
