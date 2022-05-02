import React from 'react';
import UseInventories from '../../../hooks/UseInventories';

const ManageInventories = () => {
  const [inventories] = UseInventories([]);
  
  if(!inventories){
    return <p>loading...</p>
  }

  const handleRemove = id =>{

    const item = inventories.find(i => i._id === id);
    inventories.pop(item);
    console.log(inventories.length)
  }
  
  return (
    <div>
        <h1 className='text-3xl text-blue-500 font-semibold text-center my-5' >Manage Inventories ({inventories.length}) </h1>
        <div>
          <table className='w-full mx-auto'>
            <tr className=''>
              <th className='text-left p-5'>Image</th>
              <th className='text-left p-5'>Name</th>
              <th className='text-left p-5'>Price</th>
              <th className='text-left p-5'>Quantity</th>
              <th className='text-left p-5'>Sold</th>
            </tr>
            {
              inventories.map(inv => <tr className=''>
                <td className='text-left p-5  '><img className='w-16' src={inv.img} alt={inv.name}></img></td>
                <td className='text-left p-5'>{inv.name}</td>
                <td className='text-left p-5'>{inv.price}</td>
                <td className='text-left p-5'>{inv.quantity}</td>
                <td className='text-left p-5'>{inv.sold}</td>
                <td className='text-left p-5'>
                  <button onClick={()=> handleRemove(inv._id)}>X</button>
                </td>
                
              </tr>)
            }
          </table>
        </div>
    </div>
  );
};

export default ManageInventories;

{/* <div className='flex items-center space-x-8'>
                <img className='w-16' src={inv.img} alt={inv.name} /> 
                <p className='text-xl'>{inv.name}</p>
                <p className='text-xl'>$<span>{inv.price}</span></p>
                <p className='text-xl'>{inv.quantity} available</p>
                </div> */}