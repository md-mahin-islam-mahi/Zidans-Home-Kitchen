import React, { useEffect, useState } from 'react';
import ShowReviewCard from './ShowReviewCard';

const SeeReview = ({ food }) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://zidans-home-kitchen-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const newReview = reviews.filter(review => review.item_id === food._id);
    return (
        <div className='flex flex-col-reverse'>
            {
                newReview.map(item => <ShowReviewCard item={item}></ShowReviewCard>)
            }
        </div>
    );
};

export default SeeReview;