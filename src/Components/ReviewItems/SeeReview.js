import React, { useEffect, useState } from 'react';
import ShowReviewCard from './ShowReviewCard';

const SeeReview = ({food}) => {
const [reviews, setReviews] = useState([]);

useEffect( () => {
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
}, [food._id])

console.log(reviews);
    return (
        <div className='flex flex-col-reverse'>
               {
                reviews.map(review => <ShowReviewCard item={review}></ShowReviewCard>)
               }
        </div>
    );
};

export default SeeReview;