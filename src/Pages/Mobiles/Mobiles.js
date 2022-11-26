import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AllMobiles from './AllMobiles';

const Mobiles = () => {
    const mobiles = useLoaderData();

    return (
        <div>
            <h1 className="text-4xl text-center text-neutral py-5">Category</h1>
            <div className='py-3 text-center grid grid-cols-1 lg:grid-cols-4  lg:w-3/5 lg:mx-auto'>
                <Link to='/' className='btn btn-success mr-3 mb-3 lg:mb-0'>All</Link>
                <Link to='/' className='btn btn-success mr-3 mb-3 lg:mb-0'>Iphone</Link>
                <Link to='/' className='btn btn-success mr-3 mb-3 lg:mb-0'>Samsung</Link>
                <Link to='/' className='btn btn-success mr-3 mb-3 lg:mb-0'>Xiaomi</Link>

            </div>
            <div>
                {
                    mobiles.map(mobile => <AllMobiles key={mobile._id} mobile={mobile}></AllMobiles>)
                }
            </div>

        </div>
    );
};

export default Mobiles;