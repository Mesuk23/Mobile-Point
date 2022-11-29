
import React, { useContext } from 'react';
import { authContext } from '../../Context/ContextProvider';

const Checkout = ({ name, price }) => {
    const { user } = useContext(authContext);
    console.log(name, price)
    const email = user?.email;
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const place = form.place.value;
        const phone = form.phone.value;
        const name = form.item.value;
        const price = form.price.value;

        const order = { name, price, email, place, phone }
        form.reset();
        console.log(order)
    }




    return (
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
                            <input defaultValue={email} readOnly className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input name='item' defaultValue={name} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name='price' defaultValue={price} className="input input-bordered" />
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
    );
};

export default Checkout;