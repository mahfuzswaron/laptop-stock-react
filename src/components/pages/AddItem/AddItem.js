import React from 'react';

const AddItem = () => {
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
        <div className='mx-auto' id='add-items'>
            <h3 className='text-center text-blue-500 text-3xl font-semibold my-5'>Add Inventory</h3>
            <div className='mx-auto w-1/2'>
              <form onSubmit={(e)=> handleAdd(e)} className='flex flex-col space-y-4'>
                <input required className='border p-2' type={'text'} name={'name'} placeholder='Inventory Name'/>
                <input required className='border p-2' type={'text'} name={'img'} placeholder='Image Url'/>
                <textarea required className='border p-2' resize='horizontal' type={'text'} name={'description'} placeholder='Inventory description'/>
                <input required className='border p-2' type={'text'} name={'supplier'} placeholder="Supplier's name"/>
                <input required className='border p-2' type={'number'} name={'price'} placeholder='price'/>
                <input required className='border p-2' type={'number'} name={'quantity'} placeholder='quantity'/>
                <button className='p-2 text-white bg-green-500 rounded' type={'submit'}>Add Inventory</button>
              </form>
            </div>
          </div>
    );
};

export default AddItem;