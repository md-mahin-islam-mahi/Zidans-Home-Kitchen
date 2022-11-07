import React from 'react';

const Slider = () => {
    return (
        <div>
            <div className="carousel w-2/3 mx-auto mt-20 rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ytimg.com/vi/PCAwJs51D0k/maxresdefault.jpg" className="w-full slider-img" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://assets.bonappetit.com/photos/57aceacc1b3340441497532d/master/pass/double-rl-ranch-burger.jpg" className="w-full slider-img" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ytimg.com/vi/nsw0Px-Pho8/maxresdefault.jpg" className="w-full slider-img" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;