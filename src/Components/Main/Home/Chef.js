import React from 'react';

const Chef = () => {
    return (
        <div className="hero h-full">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src="https://static.cordonbleu.edu/Files/MediaFile/79299.jpg" className="max-w-sm rounded-lg shadow-lg hover:translate-x-20 hover:translate-y-10 hover:shadow-xl transition duration-300 ease-in-out" alt='Chef' />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Chef Zidan</h1>
                    <p className="py-6 text-start">Chef Zidan is a professional chef. He is experienced for more than 10 years in cooking. He is now currently a chef in his own restaurent Zidans Home Kitchen</p>
                </div>
            </div>
        </div>
    );
};

export default Chef;