import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import AllServiceCard from './AllServiceCard';

const AllService = () => {
    const [foods, setFoods] = useState([]);
    useTitle('Services')

    useEffect(() => {
        fetch('https://zidans-home-kitchen.vercel.app/food-items')
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