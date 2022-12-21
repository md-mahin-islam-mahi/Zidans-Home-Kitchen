import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Services from '../Services/Services';
import Available from './Available';
import Chef from './Chef';
import Slider from './Slider';

const Home = () => {
    useTitle('Home')
    return (
        <div className=''>
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