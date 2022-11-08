import React from 'react';
import { FaStar } from "react-icons/fa";

const AllServiceCard = ({ service }) => {
    const { name, image, description, ratings, price } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0, 100) + '...'}</p>
                    <p className='flex'>
                        <span className='mr-5 flex items-center'><b>Ratings: {ratings}</b>
                        <FaStar className='text-yellow-500 ml-2'/>
                        </span>
                        <span className='ml-5'><b>Price: {price}</b></span>
                    </p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-error shadow-xl mt-3">Rate Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServiceCard;