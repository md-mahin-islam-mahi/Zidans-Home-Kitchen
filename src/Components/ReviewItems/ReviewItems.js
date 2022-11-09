import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const ReviewItems = () => {
    const foods = useLoaderData();
    const {user} = useContext(AuthContext);

    const reviewItem = e => {
        e.preventDefault();
        const form = e.target;
        const itemName = foods.name;
        const email = form.email.value;
        const comment = form.review.value;
        const photoURL = user?.photoURL;
        const item_id = foods._id;

        const review = {
            item_id,
            itemName,
            email,
            comment,
            photoURL 
        }
        
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review)
        })
        alert('Review Added Successfully');
        form.reset()
    }

    return (
        <div>
            <form onSubmit={reviewItem}>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                        </div>
                        <div className="card w-full shadow-2xl ">
                            <div className="card-body">
                                <h2 className="text-4xl font-semibold">Review {foods.name} Item</h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="Your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <textarea name="review" className="textarea textarea-bordered" placeholder="Your Review"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-outline btn-error" type="submit" value="Review" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ReviewItems;