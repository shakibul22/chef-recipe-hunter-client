import  { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

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
        <div className="navbar max-w-screen mx-auto bg-cyan-100 shadow-lg p-1 lg:p-3  px-2 lg:px-7 ">
            <div className="flex-1">
              <a href='#' className='text-xl lg:text-2xl font-bold'>FoodLEE</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-none lg:px-1">
                    <li className='text-sm'>  <NavLink to="/" >Home</NavLink></li>
                    <li> <NavLink to="/blog" >Blog</NavLink></li>
                    {user ? <><div className='flex flex-row items-center gap-1'>
                        <p onClick={handleLogout}>Logout</p>
                    <div className="tooltip  tooltip-bottom" data-tip={user.displayName}>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                          </div>
                    </div>
                       </> : <li> <Link to="/login" >Login</Link></li>}
                </ul>

            </div>
        </div>

    );
};

export default Header;

