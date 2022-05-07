import React from 'react';
import UseInventories from '../../../hooks/UseInventories';

const removeIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#FF0000">
<path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
</svg>


const ManageInventories = () => {
  const [inventories] = UseInventories([]);
  
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

  const handleAdd = (e) =>{
    e.preventDefault();
    const name = e.target.name.value ;
    const img = e.target.img.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const newInv = { 
      name,
      img,
      description,
      price,
      email: 'user-email debo ekhane',
      quantity,
      supplier,
      sold: '0'
    
    }
    fetch('https://laptop-stock-server.herokuapp.com/laptops/addnew',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newInv)
    })
    .then(res => res.json())
    .then(data => console.log(data))

    e.target.reset()
    
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
                  <button onClick={()=> handleRemove(inv._id)}>{removeIcon}</button>
                </td>
              </tr>)
            }
            </tbody>
          </table>
          <hr className='my-5 w-3/5 mx-auto'></hr>
          <div className='mx-auto'>
            <h3 className='text-center text-blue-500 text-3xl font-semibold my-5'>Add Inventory</h3>
            <div className='mx-auto w-1/2'>
              <form onSubmit={(e)=> handleAdd(e)} className='flex flex-col space-y-4'>
                <input required className='border p-2' type={'text'} name={'name'} placeholder='Inventory Name'/>
                <input required className='border p-2' type={'text'} name={'img'} placeholder='Image Url'/>
                <textarea required className='border p-2' resize='horizontal' type={'text'} name={'description'} placeholder='Inventory description'/>
                <input required className='border p-2' type={'text'} name={'supplier'} placeholder="Supplier's name"/>
                <input required className='border p-2' type={'number'} name={'price'} placeholder='price'/>
                <input required className='border p-2' type={'number'} name={'quantity'} placeholder='quantity'/>
                <button className='p-2 bg-blue-500 text-white bg-green-500 rounded' type={'submit'}>Add Inventory</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ManageInventories;