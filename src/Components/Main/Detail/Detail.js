import React from 'react';
import { FaStar } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import Ratings from '../Ratings/Ratings';

const Detail = () => {
    const food = useLoaderData();
    const { name, image, ratings, price, description } = food;
    return (
        <div className='py-20'>
            <div className="card card-side w-1/2 mx-auto shadow-xl border">
                <figure><img className='h-full' src={image} alt="Food" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p className='flex justify-between items-center'>
                        <span className='mr-5 flex items-center'><b>Ratings: {ratings}</b>
                            <FaStar className='text-yellow-500 ml-2' />
                        </span>
                        <span className='ml-5'><b>Price: {price}</b></span>
                    </p>
                </div>
            </div>
            <div>
                <Ratings />
            </div>
        </div>
    );
};

export default Detail;