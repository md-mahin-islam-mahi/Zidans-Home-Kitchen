import React, { useEffect, useState } from 'react';

const Ratings = () => {
    const [ratings, setRatings] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/ratings`)
        .then(res => res.json())
        .then(data => setRatings(data));
    }, [])

    return (
        <div className='py-10'>
            {
                ratings.map(rating => <h2>{rating.name}</h2>)
            }
        </div>
    );
};

export default Ratings;