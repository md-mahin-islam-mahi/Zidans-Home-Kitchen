import React, { useEffect, useState } from 'react';
import AllServiceCard from './AllServiceCard';

const AllService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/food-items')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h2 className="text-5xl my-5 font-semibold">Here are our services</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 mx-auto lg:gap-20 gap-10 pl-40 my-20'>
                {
                    services.map(service => <AllServiceCard
                        key={service._id}
                        service={service}
                    ></AllServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllService;