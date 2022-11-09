import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../../Context/UserContext';

const History = () => {
    const {user, loader} = useContext(AuthContext);
    console.log(user)
    const [allReview, setAllReview] = useState([]);
    useTitle('My-Review')
    
    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setAllReview(data))
    }, [])

    if (loader) {
        return <div>Loading...</div>
    };

    const selectedItem = allReview.filter(item => item.email === user.email);
    const newReview = [selectedItem];
    const allItem = [...newReview]

    console.log(allItem)

    return (
        <div>
            
        </div>
    );
};

export default History;