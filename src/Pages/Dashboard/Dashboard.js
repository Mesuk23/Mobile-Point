import React, { useContext } from 'react';
import { Button } from 'react-daisyui';
import { Link, Outlet } from 'react-router-dom';
import { authContext } from '../../Context/ContextProvider';
import useAdmin from '../../Hooks/useAdmin';
import useSeller from '../../Hooks/useSeller';
import useTitle from '../../Hooks/Usetitle';
import useUser from '../../Hooks/useUser';

const Dashboard = () => {
    useTitle('Dashboard')
    const { user } = useContext(authContext)
    console.log(user);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isUser] = useUser(user?.email);
    return (
        <div>
            <div>
                <h1 className="text-4xl text-center text-amber-600 font-bold py-5">Dashboard</h1>
                <hr className='mb-5' />
                <div className='grid grid-cols-1 lg:grid-cols-5 my-5'>
                    <div className="col-span-1 lg:border-r-2 lg:border-indigo-500 text-center">
                        {
                            isSeller && <>
                                <Button className='btn btn-outline my-5'>
                                    <Link to='/dashboard/myproducts'>My Products</Link>
                                </Button> <br />
                                <Button className='btn btn-outline mb-5'>
                                    <Link to='/dashboard/addproduct'>Add Products</Link>
                                </Button><br />
                            </>
                        }
                        {
                            isAdmin && <>
                                <Button className='btn btn-outline mb-5'>
                                    <Link to='/dashboard/allseller'>All Seller</Link>
                                </Button><br />
                                <Button className='btn btn-outline mb-5'>
                                    <Link to='/dashboard/allbuyer'>All Buyer</Link>
                                </Button><br />
                                <Button className='btn btn-outline mb-5'>
                                    <Link to='/dashboard/reporteditem'>Reported Items</Link>
                                </Button><br />
                            </>
                        }
                        <Button className='btn btn-outline mb-5'>
                            <Link to='/dashboard/myorder'>My Orders</Link>
                        </Button><br />
                        {
                            isUser && <>
                                <Button className='btn btn-outline mb-5'>
                                    <Link to='/dashboard/myorder'>My Orders</Link>
                                </Button><br />
                            </>
                        }


                    </div>
                    <div className="col-span-4">
                        <Outlet></Outlet>
                    </div>

                </div>
            </div>

        </div>


    );
};

export default Dashboard;