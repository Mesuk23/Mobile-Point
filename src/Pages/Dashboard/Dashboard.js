import React from 'react';
import { Button } from 'react-daisyui';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/Usetitle';

const Dashboard = () => {
    useTitle('Dashboard')
    return (
        <div>
            <div>
                <h1 className="text-4xl text-center text-amber-600 font-bold py-5">Dashboard</h1>
                <hr className='mb-5' />
                <div className='grid grid-cols-1 lg:grid-cols-5 my-5'>
                    <div className="col-span-1 lg:border-r-2 lg:border-indigo-500 text-center">
                        <Button className='btn btn-outline my-5'>
                            <Link to='/myproducts'>My Products</Link>
                        </Button> <br />
                        <Button className='btn btn-outline mb-5'>
                            <Link to='/addproduct'>Add Products</Link>
                        </Button><br />
                        <Button className='btn btn-outline mb-5'>
                            <Link to='/allseller'>All Seller</Link>
                        </Button><br />
                        <Button className='btn btn-outline mb-5'>
                            <Link to='/allbuyer'>All Buyer</Link>
                        </Button><br />
                    </div>
                    <div className="col-span-4">

                    </div>

                </div>
            </div>

        </div>


    );
};

export default Dashboard;