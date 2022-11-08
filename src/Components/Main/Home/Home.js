import React from 'react';
import Services from '../Services/Services';
import Available from './Available';
import Chef from './Chef';
import Slider from './Slider';

const Home = () => {
    return (
        <div className=''>
            <h1 className="text-2xl py-10">Welcome to
                <br />
                <span className='text-5xl font-bold'>Zidans Home Kitchen</span></h1>
            <div className='flex flex-col-reverse'>

                {/* Text and Image */}
                <div className='sm:mx-auto my-10'>
                    <Chef />
                </div>

                {/* Slider */}
                <div className='px-5'>
                    <Slider />
                </div>
            </div>
            <div className='mt-5'>
                <h2 className="text-4xl mt-10 font-semibold">Timing, Contact and Location</h2>
                <Available />
            </div>
            <div>
            <h2 className="text-4xl my-10 font-semibold">Out Services</h2>
                <Services />
            </div>
        </div>
    );
};

export default Home;