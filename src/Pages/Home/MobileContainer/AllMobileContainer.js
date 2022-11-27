import React from 'react';
import { Link } from 'react-router-dom';

const AllMobileContainer = ({ mobile }) => {
    const { _id, name, category, img, price, originalPrice, time, year, location } = mobile;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-96 ml-3 h-96' src={img} alt="Album" /></figure>
                <div className="card-body">

                    <h2 className="card-title">
                        Model: {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Location: {location}</p>
                    <p>Category: {category}</p>
                    <p>Price: ${price}</p>
                    <p>Published Date: {time}</p>
                    <p>Used: {year} years</p>
                    <p>Original Price: ${originalPrice}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${_id}`} className="btn btn-primary">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllMobileContainer;