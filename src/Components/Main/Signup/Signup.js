import React from 'react';
import { Link } from 'react-router-dom';
import login from '../Login/image/login.png'

const Signup = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="card w-full max-w-md shadow-2xl ">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required/>
                            <div className='flex justify-center items-center'>
                            </div>
                            <p className="my-3">Already have an account? <Link to="/login">Log In</Link></p>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;