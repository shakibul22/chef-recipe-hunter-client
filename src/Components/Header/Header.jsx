import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { Input } from 'postcss';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="navbar bg-cyan-100 shadow-lg p-3 w-full">
            <div className="flex-1">
              <a href='#' className='text-xl lg:text-2xl font-bold'>FoodLEE</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>  <NavLink to="/" >Home</NavLink></li>
                    <li> <NavLink to="/blog" >Blog</NavLink></li>
                    {user ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>{user.displayName}</a></li>
                                <li><a onClick={handleLogout}>Logout</a></li>
                            </ul>
                        </div> : <li> <Link to="/login" >Login</Link></li>}
                </ul>

            </div>
        </div>

    );
};

export default Header;

