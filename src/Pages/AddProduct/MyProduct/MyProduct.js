import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../../../Context/ContextProvider';
import useTitle from '../../../Hooks/Usetitle';

const MyProduct = () => {
    const { user } = useContext(authContext);

    const { data: sellers = [] } = useQuery({
        queryKey: ['mobiles'],
        queryFn: () => fetch(`http://localhost:5000/allProducts/${user.email}`)
            .then(res => res.json())
    })

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
                                <td>
                                    <button onClick={() => handleDelete(seller._id)} className="btn btn-xs btn-error">Delete</button>
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

export default MyProduct;