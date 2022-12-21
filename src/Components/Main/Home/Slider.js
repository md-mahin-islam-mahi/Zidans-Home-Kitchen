import React from 'react';
import './slider.css'

const Slider = () => {
    return (
        <div>
            <div className="carousel w-4/5 mx-auto mt-20 rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='slider-img'>
                        <img src="https://i.ytimg.com/vi/PCAwJs51D0k/maxresdefault.jpg" className="w-full h-full slider-img" alt="" />
                    </div>
                    <div className=' absolute left-20 top-1/3 text-start'>
                        <h2 className="text-7xl text-gray-300 font-semibold">Zidans Home Kitchen</h2>
                        <p className="text-4xl text-gray-400">A trusted place where you can order services..</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="slider-img">
                        <img src="https://assets.bonappetit.com/photos/57aceacc1b3340441497532d/master/pass/double-rl-ranch-burger.jpg" className="h-screen slider-img" alt="" />
                    </div>
                    <div className=' absolute left-20 top-1/3 text-start'>
                        <h2 className="text-7xl text-gray-300 font-semibold">Zidans Home Kitchen</h2>
                        <p className="text-4xl text-gray-400">A trusted place where you can order services..</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full overflow-hidden">
                    <div className="slider-img">
                        <img src="https://vegconom.de/vegconomistcom/wp-content/uploads/sites/3/Ohayo-Valley.jpg" className="w-screen slider-img" alt="" />
                    </div>
                    <div className=' absolute left-20 top-1/3 text-start'>
                        <h2 className="text-7xl text-gray-300 font-semibold">Zidans Home Kitchen</h2>
                        <p className="text-4xl text-gray-400">A trusted place where you can order services..</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;