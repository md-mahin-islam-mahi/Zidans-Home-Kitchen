import React, { useEffect, useState } from 'react';
import AllServiceCard from './AllServiceCard';

const AllService = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/food-items')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])

    return (
        <div>
            <h2 className="text-5xl my-5 font-semibold">Here are our services</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 mx-auto lg:gap-20 gap-10 pl-40 my-20'>
                {
                    foods.map(food => <AllServiceCard
                        key={food._id}
                        food={food}
                    ></AllServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllService;