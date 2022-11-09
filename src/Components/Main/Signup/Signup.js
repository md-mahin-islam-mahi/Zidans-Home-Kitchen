import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../../Context/UserContext';
import login from '../Login/image/login.png'

const Signup = () => {
    const {signUp} = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle('Sign Up');

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        signUp(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error);
        });
        navigate("/login")
    }


    return (
        <form onSubmit={handleSignup}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={login} alt="" />
                    </div>
                    <div className="card w-full max-w-md shadow-2xl ">
                        <div className="card-body">
                        <h2 className="text-4xl font-semibold">Sign Up</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
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
        </form>
    );
};

export default Signup;