import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = (props) => {
    const { inventory } = props;
    const { name, description, price, supplier, quantity, img, _id } = inventory;
    return (
        <div className='flex-col items-center justify-center rounded-lg bg-white  drop-shadow-xl p-3 m-1 lg:m-5'>

            <div className='card-img flex justify-center items-center'>
                <img className='w-3/5' src={img} alt={name} />
            </div>

            <div className='card-body text-left'>
                <h3 className='text-2xl text-primary font-medium truncate'>{name}</h3>
                <p className='mt-1 truncate' title={description} >{description}</p>
                <p className='mt-1'><strong>${price}</strong></p>
                <p className='mt-1'>{quantity} available </p>
                <p className='mt-1'>Supplier: {supplier}</p>
                <button className='btn btn-primary  mt-2 w-2/3 text-white '><Link to={`/inventory/${_id}`}>Update</Link></button>
            </div>
        </div>
    );
};

export default Inventory;