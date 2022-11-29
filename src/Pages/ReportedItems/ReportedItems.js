
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReportedItems = () => {
    const mobiles = useLoaderData();
    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure to delete the comment?');
        if (proceed) {
            fetch(`http://localhost:5000/allMobiles/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        alert(` deleted successfully`)

                    }
                })
        }
    }

    return (
        <div>
            <h1 className="text-4xl text-center text-amber-600 font-bold py-5">Reported items</h1>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            mobiles.map((mobile, i) => <tr key={mobile._id}>
                                <th>{i + 1}</th>
                                <td>{mobile.sellerName}</td>
                                <td>{mobile.location}</td>
                                <td>{mobile.name}</td>
                                <td>{mobile.price}</td>
                                <td>{mobile.time}</td>
                                <td>
                                    <button onClick={() => handleDelete(mobile._id)} className="btn btn-xs btn-error">Delete</button>
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

export default ReportedItems;