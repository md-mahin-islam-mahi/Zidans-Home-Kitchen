import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const ShowReviewCard = ({item}) => {
    const {itemName, comment} = item;

    const {user} = useContext(AuthContext);
    return (
        <div>
            <h3>{itemName}</h3>
        </div>
    );
};

export default ShowReviewCard;