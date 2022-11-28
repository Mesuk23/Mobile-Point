
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {
    const { data: productSeller = [], refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: () => fetch('http://localhost:5000/seller')
            .then(res => res.json())
    })

    const handleMakeAdmin = _id => {
        fetch(`http://localhost:5000/seller/admin/${_id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Make admin successful.')
                    refetch()
                }
            })
    }
    const handleMakeVerified = _id => {
        fetch(`http://localhost:5000/seller/verify/${_id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Verified successfully.')
                    refetch()
                }
            })
    }
    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure to delete the comment?');
        if (proceed) {
            fetch(`http://localhost:5000/seller/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        alert(` deleted successfully`)
                        refetch()
                    }
                })
        }
    }
    return (
        <div>
            <h1 className="text-4xl text-center text-amber-600 font-bold py-5">All Sellers</h1>
            <div className='my-10'>
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Admin</th>
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            productSeller.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.role}</td>
                                <td>{seller.email}</td>
                                <td>
                                    <button onClick={() => handleDelete(seller._id)} className="btn btn-xs btn-error">Delete</button>
                                </td>
                                <td>
                                    {seller?.role !== 'admin' && <button onClick={() => handleMakeAdmin(seller._id)} className='btn btn-xs btn-primary'>Make Admin</button>}
                                </td>
                                <td>
                                    {seller?.verify === 'yes' ? <span className='text-success font-bold'> Verified</span> : <button onClick={() => handleMakeVerified(seller._id)} className='btn btn-xs btn-primary'>Verify</button>
                                    }
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

export default AllSeller;