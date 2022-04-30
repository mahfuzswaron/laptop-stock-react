import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';


const InventoryDetails = () => {

    const {id} =  useParams();
    const [inventory] = useInventory(id);

    if(!inventory){
        return <p>loading...</p>
    }
    
    
    const {name, description, price, supplier, quantity, img} = inventory;
    const invId = "don't forget to add id here";
    return (
        <div className='flex bg-white border hover:drop-shadow-xl p-3 m-5'>

        <div className='card-img w-2/5 flex justify-center'>
            <img className='w-96' src={img} alt={name} />
        </div>

        <div className='card-body w-3/5'>
        <h3  className='text-2xl text-blue-400 font-medium'>{name}</h3>
        <p className='mt-1'>Product id: {invId}</p>
        <p className='mt-1'>{description}</p>
        <p className='mt-1'><strong>${price}</strong></p>
        <p className='mt-1'>{quantity} available </p>
        <p className='mt-1'>Supplier: {supplier}</p>
        <button 
        className='bg-blue-400 hover:bg-blue-500 px-3 py-2 mt-2 rounded text-white' 
        onClick={() => console.log('clicked')}
        >Delevered</button>
        </div>
        </div>
    );
};

export default InventoryDetails;