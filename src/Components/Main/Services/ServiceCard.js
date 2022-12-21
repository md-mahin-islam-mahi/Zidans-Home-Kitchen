import React from 'react';

const ServiceCard = ({ service }) => {
    const { name, image, description } = service;
    return (
        <div>
            <div className="card card-compact w-96 mx-auto shadow-lg hover:-translate-y-5 hover:shadow-2xl transition duration-200 service-card">
                <figure>
                    <img className='' src={image} alt="Foods" />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0, 100) + "..."}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;