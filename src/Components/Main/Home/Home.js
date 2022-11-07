import React from 'react';
import Slider from './Slider';
import './Slider.css'

const Home = () => {
    return (
        <div>
            <h1 className="text-2xl py-10">Welcome to
                <br />
                <span className='text-5xl font-bold'>Zidans Home Kitchen</span></h1>
            <div className='grid lg:grid-cols-2'>

                {/* Text and Image */}
                <div>
                    <div className="hero h-full">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://static.cordonbleu.edu/Files/MediaFile/79299.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Chef Zidan</h1>
                                <p className="py-6">Ched Zidan is a professional chef. He is experienced for more than 10 years in cooking. He is now currently a chef in his own restaurent Zidans Home Kitchen</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slider */}
                <div>
                    <Slider />
                </div>
            </div>
        </div>
    );
};

export default Home;