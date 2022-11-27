import React from 'react';

const MyAllProducts = ({ seller }) => {
    console.log(seller)
    const { sellerName, location, name, price, time } = seller
    return (
        <div>
            <th>1</th>
            <td>{sellerName}</td>
            <td>{location}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{time}</td>
            <td>Blue</td>
        </div>
    );
};

export default MyAllProducts;