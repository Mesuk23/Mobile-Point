import React, { useContext, useState } from 'react';
import Checkout from '../Checkout/Checkout';
import { FaCheckCircle } from 'react-icons/fa';
import { authContext } from '../../Context/ContextProvider';

const AllMobiles = ({ mobile }) => {
    const [order, setOrder] = useState([])
    const [allOrder, setAllorder] = useState([])
    const { user } = useContext(authContext)
    const { _id, name, sellerName, category, img, price, originalPrice, time, year, location, verify } = mobile;
    console.log(order)
    const handleCheckout = id => {
        fetch(`http://localhost:5000/allMobiles/myMobile/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const place = form.place.value;
        const phone = form.phone.value;
        const name = form.item.value;
        const price = form.price.value;

        const email = user?.email;

        const orders = { name, price, email, place, phone }
        form.reset();
        console.log(orders)

        fetch('http://localhost:5000/allbuyer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('order added')
                    form.reset()
                    setAllorder(data)
                }
            })
    }

    return (
        <div>

            <div className="card lg:card-side bg-base-100 shadow-xl mb-5 bg-neutral text-white">
                <figure><img className='w-96 ml-3' src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Model: {name}</h2>
                    <p className='flex items-center'>Seller: {sellerName} <span className='ml-3'>
                        {
                            verify && <FaCheckCircle className='text-blue-700' />
                        }
                    </span>

                    </p>
                    <p>Location: {location}</p>
                    <p>Category: {category}</p>
                    <p>Price: ${price}</p>
                    <p>Published Date: {time}</p>
                    <p>Used: {year} years</p>
                    <p>Original Price: ${originalPrice}</p>
                    <div className="card-actions justify-end">
                        <label onClick={() => handleCheckout(_id)} htmlFor="my-modal-6" className="btn btn-primary">Book Now</label>
                    </div>

                </div>

            </div>
            {/* <Checkout name={order.name} price={order.price}></Checkout> */}
            <div>
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h1 className="text-4xl text-center text-rose-500 font-bold">Checkout</h1>
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input defaultValue={user?.email} readOnly className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Item Name</span>
                                </label>
                                <input name='item' defaultValue={order.name} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input name='price' defaultValue={order.price} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Meeting Place</span>
                                </label>
                                <input name='place' type='text' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input name='phone' type='text' className="input input-bordered" />
                            </div>
                            <div className="form-control my-4">
                                <button className='btn btn-success'>Submit</button>
                            </div>
                            <div className="modal-action">
                                <label htmlFor="my-modal-6" className="btn">Close</label>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllMobiles;