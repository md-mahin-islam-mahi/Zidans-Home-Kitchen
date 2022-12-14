import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../../Context/UserContext';
import ShowMyReview from './ShowMyReview';

const History = () => {
    const { user, loader } = useContext(AuthContext);
    // console.log(user)
    const [allReview, setAllReview] = useState([]);
    useTitle('My-Review')

    useEffect(() => {
        fetch('https://zidans-home-kitchen-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setAllReview(data))
    }, [])

    // console.log(allReview)

    if (loader) {
        return <progress className="progress w-56"></progress>
    };

    const selectedItem = allReview.filter(item => item.userId === user.uid);

    return (
        <div>
            <h2 className="text-4xl font-semibold py-10">My Reviews</h2>
            {
                selectedItem.map(item => <ShowMyReview 
                    key={item._id}
                    item={item}
                    selectedItem={selectedItem}
                    ></ShowMyReview>)
            }
        </div>
    );
};

export default History;