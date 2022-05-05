import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';


const InventoryDetails = () => {

    const {id} =  useParams();
    const [inventory] = useInventory(id);
    const {name, _id, description, price, supplier, sold, quantity, img} = inventory;
    const [newQuantity, setNewQuantity] = useState('0');

    if(!inventory){
        return <p>loading...</p>
    }
    
    const handleQuantity =  (WillIncrease) =>{
        let updatedQuantity ;
        let updatedSold = sold;
        if(WillIncrease === true){
         updatedQuantity = parseInt(newQuantity) + parseInt(quantity);

        }
        
        if(WillIncrease === false){
           updatedQuantity = parseInt(quantity) -1;
           updatedSold = parseInt(sold) + 1;
        }

        const update = {
            quantity: updatedQuantity,
            sold: updatedSold
        }

        fetch(`http://localhost:4000/laptop/update?id=${_id}`, {
           method: 'PUT',
           headers:{
               'content-type': 'application/json'
           },
           body: JSON.stringify(update)
       })
       .then(res => res.json())
       .then(data => console.log(data))
    }

    return (
        <div className='flex bg-white border hover:drop-shadow-xl p-5 m-5'>

        <div className='card-img w-2/5 flex justify-center'>
            <img className='w-96' src={img} alt={name} />
        </div>

        <div className='card-body w-3/5'>
        <h3  className='text-2xl text-blue-400 font-medium'>{name}</h3>
        <p className='mt-1'>Product id: {_id}</p>
        <p className='mt-1'>{description}</p>
        <p className='mt-1'><strong>${price}</strong></p>
        <p className='mt-1'>{sold} sold</p>
        <p className='mt-1'>{quantity} available </p>
        <p className='mt-1'>Supplier: {supplier}</p>
        <button 
        className='bg-green-400 hover:bg-green-500 px-3 py-2 mt-2 rounded text-white' 
        onClick={() => handleQuantity(false)}
        >Delevered</button>
        <hr className='my-2'></hr>
        <input onBlur={(e)=> e.target.value = ''} onChange={(e)=> setNewQuantity(e.target.value)} className='border block px-3 py-2 mt-2' type={'number'}  />
        <button onClick={() => {handleQuantity(true)}} className='bg-blue-400 hover:bg-blue-500 px-3 py-2 mt-2 rounded text-white block' >Add Product(s)</button>
        </div>
        </div>
    );
};

export default InventoryDetails;