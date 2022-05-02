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

  const handleAdd = (e) =>{
    e.preventDefault();
    const name = e.target.name.value ;
    const img = e.target.img.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const newInv = { 
      name,
      img,
      description,
      price,
      email: 'user-email debo ekhane'
    
    }
    fetch('http://localhost:4000/laptops/addnew',{
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newInv)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    
  }
  
  return (
    <div>
        <h1 className='text-3xl text-blue-500 font-semibold text-center my-5' >Manage Inventories ({inventories.length}) </h1>
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
                  <button onClick={()=> handleRemove(inv._id)}>X</button>
                </td>
              </tr>)
            }
            </tbody>
          </table>
          <hr className='my-5 w-3/5 mx-auto'></hr>
          <div className='mx-auto'>
            <h3 className='text-center text-blue-500 text-3xl font-semibold my-5'>Add Inventory</h3>
            <div className='flex justify-center'>

              <form onSubmit={(e)=> handleAdd(e)} className='flex space-x-8 items-start'>
                <input className='border p-2' type={'text'} name={'name'} placeholder='Inventory Name'/>
                <input className='border p-2' type={'text'} name={'img'} placeholder='Image Url'/>
                <textarea className='border p-2' resize='horizontal' type={'text'} name={'description'} placeholder='Inventory description'/>
                <input className='border p-2' type={'number'} name={'price'} placeholder='Inventory price'/>
                <input className='p-2 bg-blue-500 text-white rounded' type={'submit'} value='Add Inventory' />
              </form>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ManageInventories;