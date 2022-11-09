import React, { useEffect, useState } from 'react';
import ShowReviewCard from './ShowReviewCard';
const ReviewCard = ({ food }) => {
    const [allReview, setAllReview] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setAllReview(data))
    }, [food])

    const selectedItem = allReview.filter(item => item.itemName === food.name);
    const newReview = [selectedItem];

    return (
        <div>
            {
                newReview[0].map(item => <ShowReviewCard 
                    key={item._id}
                    item={item}
                ></ShowReviewCard>)
            }
        </div>
    );
};

export default ReviewCard;