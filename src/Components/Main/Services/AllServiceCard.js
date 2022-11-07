import React from 'react';

const AllServiceCard = ({ service }) => {
    const { name, image, description } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img className='h-20' src={image} alt="Foods" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}!</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServiceCard;