import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../../Context/ContextProvider';
import useTitle from '../../../Hooks/Usetitle';
import MyAllProducts from './MyAllProducts';

const MyProduct = () => {
    const { user } = useContext(authContext);
    const [sellers, allSellers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allProducts/${user.email}`)
            .then(res => res.json())
            .then(data => allSellers(data))
    }, [])

    useTitle('My Products')
    return (
        <div>
            <h1 className="text-4xl text-center text-amber-600 font-bold py-5">My Products</h1>
            <hr />
            <div className='my-10'>
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.sellerName}</td>
                                <td>{seller.location}</td>
                                <td>{seller.name}</td>
                                <td>{seller.price}</td>
                                <td>{seller.time}</td>
                                <td>Blue</td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default MyProduct;