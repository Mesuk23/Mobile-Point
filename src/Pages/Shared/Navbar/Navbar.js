import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Context/ContextProvider';

const Navbar = () => {

    const { user, logOut } = useContext(authContext);
    const [users, setUsers] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    console.log(users)
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => { console.log(error) });
    }


    return (
        <div className="navbar bg-neutral text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/products">Products</Link></li>

                        {
                            user && users?.role === 'Seller' && <>
                                <li><Link to="/addproduct">Add Products</Link></li>
                                <li><Link to="/myproducts">My Products</Link></li>
                            </>
                        }

                        {
                            user ? <>

                                <Link onClick={handleLogOut} className="btn">Log Out</Link>
                            </> : <>
                                <Link to="/login" className="btn">Log in</Link>
                                <Link to="/register" className="btn">Register</Link>
                            </>
                        }
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Mobile Point</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    {
                        user && users?.role === 'Seller' && <>
                            <li><Link to="/addproduct">Add Products</Link></li>
                            <li><Link to="/myproducts">My Products</Link></li>
                        </>
                    }

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <Link onClick={handleLogOut} className="btn">Log Out</Link>
                    </> : <>
                        <Link to="/login" className="btn">Log in</Link>
                        <Link to="/register" className="btn">Register</Link>
                    </>
                }

            </div>
        </div>
    );
};

export default Navbar;