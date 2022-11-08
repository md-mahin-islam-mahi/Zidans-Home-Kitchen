import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RateItem = () => {
    const food = useLoaderData();
    const {name, image} = food;

    const addRating = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const comment = form.comment.value;

        const ratings = {
            name: name,
            image: image,
            email: email,
            comment: comment
        }

        fetch('http://localhost:5000/rating', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ratings)
        })
        .then(res => res.json())
        .catch(err => console.error(err));
        form.reset();
    }
    return (
        <form onSubmit={addRating}>
            <h3 className="text-5xl mt-10">You are about to rate <span className='text-blue-600 font-semibold'>{name}</span> item</h3>
            <div className="hero min-h-screen">
                <div className="card w-full max-w-md shadow-2xl ">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Comment</span>
                            </label>
                            <textarea name="comment" className="textarea textarea-bordered" placeholder="Your Comment"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Add Rating" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default RateItem;