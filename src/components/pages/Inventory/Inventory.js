import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = (props) => {
    const {inventory} = props;
    const {name, description, price, supplier, quantity, img, _id} = inventory;
    return (
        <div className='flex rounded-lg bg-white border hover:drop-shadow-xl p-3 hover:border-blue-500 hover:border-2xl m-5'>

            <div className='card-img w-2/5'>
                <img className='w-64' src={img} alt={name} />
            </div>

            <div className='card-body w-3/5'>
            <h3  className='text-2xl text-blue-400 font-medium'>{name}</h3>
            <p className='mt-1'>{description}</p>
            <p className='mt-1'><strong>${price}</strong></p>
            <p className='mt-1'>{quantity} available </p>
            <p className='mt-1'>Supplier: {supplier}</p>
            <button className='bg-blue-400 hover:bg-blue-500 px-3 py-2 mt-2 rounded text-white '><Link to={`/inventory/${_id}`}>Update</Link></button>
            </div>
        </div>
    );
};

export default Inventory;