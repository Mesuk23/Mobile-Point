import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {
    const { data: sellers = [] } = useQuery({
        queryKey: ['mobiles'],
        queryFn: () => fetch('http://localhost:5000/seller')
            .then(res => res.json())
    })
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
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.role}</td>
                                <td>{seller.email}</td>
                                <td>
                                    <button className="btn btn-sm btn-error">Delete</button>
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