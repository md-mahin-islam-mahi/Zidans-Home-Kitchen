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
            <div className='grid lg:grid-cols-2'>

                {/* Text and Image */}
                <div className='sm:mx-auto'>
                    <Chef />
                </div>

                {/* Slider */}
                <div>
                    <Slider />
                </div>
            </div>
            <Available />
            <Services />
        </div>
    );
};

export default Home;