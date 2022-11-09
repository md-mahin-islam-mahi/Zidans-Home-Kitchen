import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../Context/UserContext';

const Header = () => {
    const { user, logOutEvent } = useContext(AuthContext);

    //? Log out method
    const signOut = () => {
        logOutEvent()
            .then(() => { })
            .catch(() => { })
    }

    const navItems =
        <>
        <li><Link to="/">Home</Link></li>
            {
                user?.uid ? <li><Link to="/my-ratings">My Ratings</Link></li> : null
            }
            <li><Link to="/blog">Blog</Link></li>
            {
                user?.uid ?
                    <li><p onClick={signOut}>Log Out</p> </li>
                    :
                    <li><Link to="/login">Login</Link></li>
            }
        </>


    return (
        <div>
            <div className="navbar bg-gray-100 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Zidans Home Kitchen</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.photoURL ? <img className='w-10 rounded-full cursor-pointer' src={user.photoURL} alt="" />
                            :
                            <FaUser />
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;