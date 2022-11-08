import React from 'react';

const RateItem = () => {
    return (
        <div className="hero min-h-screen">
            <div className="card w-full max-w-md shadow-2xl ">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Comment</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                    </div>
                    
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Add Rating" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RateItem;