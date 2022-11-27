import React from 'react';

const Services = () => {
    return (
        <div className='mb-5'>
            <h1 className="text-5xl text-rose-700 text-center py-5 font-bold">Services</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <div className='border p-5 bg-cyan-500 rounded-lg mx-3 lg:mx-0'>
                    <h1 className="text-3xl text-amber-200 pb-3 font-bold">Gurranty & Warranty</h1>
                    <hr />
                    <ol>
                        <li>1. 1 year gurranty on each products</li>
                        <li>2. 1 year service warranty</li>
                        <li>3. Best products</li>
                        <li>4. Best services</li>
                        <li>5. Best quality</li>
                    </ol>
                </div>
                <div className='border p-5 bg-red-500 rounded-lg mx-3 lg:mx-0'>
                    <h1 className="text-3xl text-amber-200 pb-3 font-bold">Exchange</h1>
                    <hr />
                    <ul>
                        <li>1. You can exchange your phone</li>
                        <li>2. You can get enough price for you phone</li>
                        <li>3. Best products</li>
                        <li>4. Best services</li>
                        <li>5. Best quality</li>
                    </ul>
                </div>
                <div className='border p-5 bg-green-500 rounded-lg mx-3 lg:mx-0'>
                    <h1 className="text-3xl text-amber-200 pb-3 font-bold">Money Back</h1>
                    <hr />
                    <ul>
                        <li>1. You can change your phone within 7 days</li>
                        <li>2. 1 year service warranty</li>
                        <li>3. Best products</li>
                        <li>4. Best services</li>
                        <li>5. Best quality</li>
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Services;