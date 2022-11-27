import React from 'react';

const AddProduct = () => {

    const handleProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const price = form.price.value;
        const originalPrice = form.originalPrice.value;
        const date = form.date.value;
        const time = form.time.value;
        const location = form.location.value;
        const img = form.img.value;

        const products = {
            name, sellerName, price, originalPrice, date, time, location, img
        }
        console.log(products)
    }

    return (
        <div>
            <h1 className="text-4xl text-rose-600 font-bold text-center my-5">Add a Product</h1>
            <form onSubmit={handleProduct} className='border mb-5 p-5 lg:w-3/5 lg:mx-auto'>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='sellerName' type="text" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Product Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name='price' type="text" placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Market Price</span>
                        </label>
                        <input name='originalPrice' type="text" placeholder="Market Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input name='date' type="text" placeholder="Date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Used</span>
                        </label>
                        <input name='time' type="text" placeholder="How many year" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input name='location' type="text" placeholder="Location" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input name='img' type="file" placeholder="Image" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add a Product</button>
                    </div>
                </div>
            </form >
        </div >
    );
};

export default AddProduct;