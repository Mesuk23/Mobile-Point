import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['mobiles'],
        queryFn: () => fetch('https://assignment-12-server-xi.vercel.app/user')
            .then(res => res.json())
    })

    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure to delete the comment?');
        if (proceed) {
            fetch(`https://assignment-12-server-xi.vercel.app/user/${_id}`, {
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
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.role}</td>
                                <td>{buyer.email}</td>
                                <td>
                                    <button onClick={() => handleDelete(buyer._id)} className="btn btn-xs btn-error">Delete</button>
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

export default AllBuyer;