import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import UseInventories from '../../../hooks/UseInventories';

const removeIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#FF0000">
<path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
</svg>


const ManageInventories = () => {
  const [inventories] = UseInventories([]);
  let location = useLocation();
  const path = location.pathname.slice(1);

  if(!inventories){
    return <p>loading...</p>
  }

  const handleRemove = id =>{
   const proceed = window.confirm('Are you sure to remove this item?');
   if(!proceed){
     return;
   }
   fetch(`https://laptop-stock-server.herokuapp.com/laptop?id=${id}`, {
     method: 'POST',
     headers:{
       'content-type': 'application/json'
     }
   })
   .then(res=> res.json())
   .then(data => console.log(data))

  }

  return (
    <div>
      <h1 className='text-3xl text-blue-500 font-semibold text-center my-5'>
        {path === 'manageinventories'? "Manage Inventories" : "My Items"} ({inventories.length})
      </h1>
        <div>
          <table className='w-full mx-auto'>
            <thead>
            <tr className=''>
              <th className='text-left p-5'>Image</th>
              <th className='text-left p-5'>Name</th>
              <th className='text-left p-5'>Price</th>
              <th className='text-left p-5'>Quantity</th>
              <th className='text-left p-5'>Sold</th>
            </tr>
            </thead>
            <tbody>
            {
              inventories.map(inv => <tr key={inv._id}>
                <td className='text-left p-5  '><img className='w-16' src={inv.img} alt={inv.name}></img></td>
                <td className='text-left p-5'>{inv.name}</td>
                <td className='text-left p-5'>{inv.price}</td>
                <td className='text-left p-5'>{inv.quantity}</td>
                <td className='text-left p-5'>{inv.sold}</td>
                <td className='text-left p-5'>
                  <button onClick={()=> handleRemove(inv._id)}>{removeIcon}</button>
                </td>
              </tr>)
            }
            </tbody>
          </table>
        {
          (path === 'manageinventories' && inventories.length > 0) && 
          <>
          <hr className='my-5 w-3/5 mx-auto'></hr>
            <button className='p-2 text-white bg-blue-500 rounded mx-auto flex justify-center'>
              <Link to='/additem'>Add New Item</Link>
          </button>
          </>
          }
        </div>
    </div>
  );
};

export default ManageInventories;