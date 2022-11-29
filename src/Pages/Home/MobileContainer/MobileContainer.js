import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import AllMobileContainer from './AllMobileContainer';

const MobileContainer = () => {
    const { data: mobiles = [] } = useQuery({
        queryKey: ['mobiles'],
        queryFn: () => fetch('https://assignment-12-server-xi.vercel.app/mobiles')
            .then(res => res.json())
    })
    return (
        <div>
            <h1 className="text-4xl text-center text-neutral py-5">Products</h1>
            <hr className='my-5' />
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    mobiles.map(mobile => <AllMobileContainer key={mobile._id} mobile={mobile}></AllMobileContainer>)
                }
            </div>
            <div className='py-5 text-center'>
                <Link to='/products' className='btn btn-success'>See Category</Link>

            </div>
        </div>
    );
};

export default MobileContainer;