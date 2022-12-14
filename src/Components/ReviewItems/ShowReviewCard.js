import React from 'react';
import { FaUser } from "react-icons/fa";

const ShowReviewCard = ({ item }) => {
    const { itemName, comment, photoURL } = item;
    return (
        
        <div className='flex items-center justify-around my-5 border rounded-lg'>
            <h3 className='text-2xl font-semibold mr-10 py-5' style={{width: '200px'}}>{itemName}</h3>
            <h3 className='text-xl py-5' style={{width: '300px'}}>{comment}</h3>

            <div className="avatar">
                <div className="w-10 mask mask-squircle">
                    {
                        photoURL? <img src={photoURL}  alt="avatar" /> : <FaUser className='text-2xl mt-3'/>
                    }
                </div>
            </div>
        </div>

    );
};

export default ShowReviewCard;