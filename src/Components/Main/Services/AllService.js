import React, { useEffect, useState } from 'react';
import AllServiceCard from './AllServiceCard';

const AllService = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/food-items')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div className='grid grid-cols-3 gap-20 pl-40 my-20'>
            {
                services.map(service => <AllServiceCard 
                    key={service._id}
                    service={service}
                ></AllServiceCard>)
            }
        </div>
    );
};

export default AllService;