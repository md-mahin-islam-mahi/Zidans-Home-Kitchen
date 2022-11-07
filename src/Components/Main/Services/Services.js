import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/food-item')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div className='grid grid-cols-4 gap-20'>
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