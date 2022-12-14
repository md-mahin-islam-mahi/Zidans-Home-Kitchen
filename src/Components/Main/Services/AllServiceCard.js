import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllServiceCard = ({ food }) => {
 

    const { name, image, description, ratings, price } = food;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-10 transition duration-200">
                <figure className="px-10 pt-10">
                    <PhotoProvider>
                        <PhotoView src={image}>
                    <img src={image} alt="Shoes" className="rounded-xl" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0, 100) + '...'}</p>
                    <p className='flex'>
                        <span className='mr-5 flex items-center'><b>Ratings: {ratings}</b>
                            <FaStar className='text-yellow-500 ml-2' />
                        </span>
                        <span className='ml-5'><b>Price: {price}</b></span>
                    </p>
                    <div className="card-actions">
                        <Link to={`/details/${food._id}`}>
                            <button className="btn btn-outline btn-error mt-3 w-80 shadow-lg">Detail</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServiceCard;