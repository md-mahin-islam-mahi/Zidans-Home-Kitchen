import React, { useState } from 'react';

const ShowMyReview = ({ item }) => {
    const { itemName, comment } = item;
    const [rest, setRest] = useState([])

    const handleDelete = () => {
        fetch(`http://localhost:5000/reviews/${item._id}` ,{
            method: 'DELETE',
            headers: {
            }
        }) 
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                alert('Deleted Successfully!');
                setRest(data);
            }
        })
      const m = item.filter(r => r._id !== rest._id);
      console.log(m);
    };

    return (
        <div className='flex items-center justify-around my-5 border rounded-lg'>
            <h3 className='text-2xl font-semibold mr-10 py-5' style={{ width: '200px' }}>{itemName}</h3>
            <h3 className='text-xl py-5' style={{ width: '300px' }}>{comment}</h3>

                <button onClick={handleDelete} className='btn btn-ghost'>Delete</button>

        </div>
    );
};

export default ShowMyReview;