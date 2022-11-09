import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const SeeReview = () => {
const [reviews, setReviews] = useState([]);

useEffect( () => {
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
}, [])

    return (
        <div>
            {
                reviews.map(item => <ReviewCard 
                    key="item._id"
                    item={item}
                    ></ReviewCard>)
            }
        </div>
    );
};

export default SeeReview;