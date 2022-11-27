import React from 'react';
import { Link } from 'react-daisyui';
import img from './img/404.jpg'

const NotFound = () => {
    return (
        <div>
            <div className='text-center mt-5 my-5'>
                <p className='text-xl'>Want to go Homepage? <Link to="/" className='text-blue-700'>Click here</Link></p>
                <div className="mx-auto w-3/5">
                    <img src={img} alt="404" />
                </div>

            </div>
        </div>
    );
};

export default NotFound;