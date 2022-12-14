import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { FaGoogle, FaGithub } from "react-icons/fa";
import login from './image/login.png';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../../Hooks/useTitle';
import { useState } from 'react';


const Login = () => {
    const {googleSignUp, loginMethod, gitHubLogin} = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    useTitle('Login')

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginMethod(email, password)
        .then(result => {
            const user = result.user;
                console.log(user)
                form.reset();
                navigate(from, {replace: true})
            })
        .catch(error => {
            setError(error.message)
        })
    };

    //* google login Method
    const provider = new GoogleAuthProvider()
    const googleSignup = () => {
        googleSignUp(provider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch(error => setError(error.message));
    }

    //* github login Method
    const gitHubProvider = new GithubAuthProvider();
    const githubSignIn = () => {
        gitHubLogin(gitHubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch(err => setError(err.message));
    }

    return (
        <form onSubmit={handleLogin}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={login} alt="" />
                    </div>
                    <div className="card w-full max-w-md shadow-2xl ">
                        <div className="card-body">
                            <h2 className="text-4xl font-semibold">Login</h2>
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
                                <p className='text-red-500'>{error}</p>
                                <div className='flex justify-center items-center'>
                                    <FaGoogle onClick={googleSignup} className='text-4xl mt-5 mx-5  cursor-pointer' />
                                    
                                    <FaGithub onClick={githubSignIn} className='text-4xl mt-5 mx-5  cursor-pointer' />
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
        </form>
    );
};

export default Login;