import React, { useContext } from 'react';
import { authContext } from '../../Context/ContextProvider';

const Checkout = ({ mobile }) => {
    const { name, category, img, price, originalPrice, time, year, location } = mobile;
    const { user } = useContext(authContext);
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h1 className="text-4xl text-center text-rose-500 font-bold">Checkout</h1>
                    <form className="w-full">
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
                            <input defaultValue={name} readOnly className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input defaultValue={price} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Meeting Place</span>
                            </label>
                            <input type='text' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type='text' className="input input-bordered" />
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
    );
};

export default Checkout;