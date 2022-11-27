import React from 'react';
import Checkout from '../Checkout/Checkout';

const AllMobiles = ({ mobile }) => {
    const { name, sellerName, category, img, price, originalPrice, time, year, location } = mobile;
    return (
        <div>

            <div className="card lg:card-side bg-base-100 shadow-xl mb-5 bg-neutral text-white">
                <figure><img className='w-96 ml-3' src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Model: {name}</h2>
                    <p>Seller: {sellerName}</p>
                    <p>Location: {location}</p>
                    <p>Category: {category}</p>
                    <p>Price: ${price}</p>
                    <p>Published Date: {time}</p>
                    <p>Used: {year} years</p>
                    <p>Original Price: ${originalPrice}</p>
                    <div className="card-actions justify-end">
                        <label htmlFor="my-modal-6" className="btn btn-primary">Book Now</label>
                    </div>

                </div>

            </div>
            <Checkout mobile={mobile}></Checkout>

        </div>
    );
};

export default AllMobiles;