import React from 'react';

const Inventory = (props) => {
    const {inventory} = props;
    const {name, description, price, supplier, quantity, img} = inventory;
    return (
        <div className='flex'>
            <div className='card-img w-2/5'>
                <img className='w-64' src={img} alt={name} />
            </div>
            <div className='card-body w-3/5'>
            <h3 className='text-2xl text-blue-700 font-bold'>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <p>{quantity} available </p>
            <p>Supplier: {supplier}</p>
            <button className='bg-blue-400 hover:bg-blue-500  px-3 py-2 mt-2 rounded text-white '>Update</button>
            </div>
        </div>
    );
};

export default Inventory;