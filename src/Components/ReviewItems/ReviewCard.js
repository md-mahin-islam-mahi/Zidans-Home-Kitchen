import React from 'react';

const ReviewCard = ({item}) => {
    return (
        <div>
            <h3>{item.comment}</h3>
        </div>
    );
};

export default ReviewCard;