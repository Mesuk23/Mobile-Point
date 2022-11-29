import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyOrders = () => {
    const orders = useLoaderData()
    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure to delete the comment?');
        if (proceed) {
            fetch(`http://localhost:5000/allbuyer/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        alert(`deleted successfully`)

                    }
                })
        }
    }
    return (
        <div>
            <h1 className="text-4xl text-center text-amber-600 font-bold py-5">My Orders</h1>
            <hr />
            <div className='my-10'>
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Metting Location</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, i) => <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.place}</td>
                                <td>{order.email}</td>
                                <td>{order.price}</td>
                                <td>{order.phone}</td>
                                <td>
                                    <button onClick={() => handleDelete(order._id)} className="btn btn-xs btn-error">Delete</button>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default MyOrders;