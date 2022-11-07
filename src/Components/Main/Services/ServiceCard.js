import React from 'react';

const ServiceCard = ({ service }) => {
    const { name, image, description } = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Foods" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.split(0, 10)}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;