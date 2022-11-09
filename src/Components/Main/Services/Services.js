import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://zidans-home-kitchen.vercel.app/food-item')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-20 sm:mx-auto'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
            <Link to="/all-services">
                <button className="btn btn-outline btn-error my-10">See More</button>
            </Link>
        </div>
    );
};

export default Services;