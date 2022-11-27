import React, { useState } from 'react';
import useTitle from '../../Hooks/Usetitle';

const AddProduct = () => {
    const [products, setProducts] = useState([])
    useTitle('Add Product');

    const handleProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const category = form.category.value;
        const price = form.price.value;
        const originalPrice = form.originalPrice.value;
        const year = form.time.value;
        const time = form.date.value;
        const location = form.location.value;
        const img = form.img.value;

        const product = {
            name, category, sellerName, price, originalPrice, year, time, location, img
        }
        fetch('http://localhost:5000/allMobiles', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('product added')
                    form.reset()
                    setProducts(data)
                }
            })
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
                            <span className="label-text">Category</span>
                        </label>
                        <input name='category' type="text" placeholder="Category" className="input input-bordered" />
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