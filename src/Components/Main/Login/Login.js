import React from 'react';
import { Link } from 'react-router-dom';
import login from './image/login.png';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
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
                                <FaGoogle className='text-4xl mt-5 mx-5'/>
                                <FaGithub className='text-4xl mt-5 mx-5'/>
                            </div>
                            <p className="my-3">Don't have an account? <Link to="/signup">Sign Up</Link></p>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;