import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RatingTable from './RatingTable';

const Ratings = () => {
    const ratings = useLoaderData();
    return (
        <div>
            {
                ratings.map(rating => <RatingTable 
                    key={rating._id}
                    rating={rating}
                     ></RatingTable>)
            }
        </div>
    );
};

export default Ratings;