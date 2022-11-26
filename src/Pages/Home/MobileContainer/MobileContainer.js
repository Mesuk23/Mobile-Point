import React from 'react';
import { Link } from 'react-router-dom';

const MobileContainer = () => {
    return (
        <div>
            <h1 className="text-4xl text-center text-neutral py-5">Products</h1>
            <div>

            </div>
            <div className='py-3 text-center grid grid-cols-1 lg:grid-cols-4  lg:w-3/5 lg:mx-auto'>
                <Link to='/products' className='btn btn-success mr-3 mb-3 lg:mb-0'>See All</Link>

            </div>
        </div>
    );
};

export default MobileContainer;