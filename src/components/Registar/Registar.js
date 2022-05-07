import React from 'react';

const Registar = () => {
    return (
        <div>
            <h3 className='text-center text-blue-500 text-3xl font-semibold my-5'>Please Registar</h3>
            <div className='mx-auto w-1/2'>
              <form className='flex flex-col space-y-4'>
                <input required className='border p-2' type={'text'} name={'name'} placeholder='Name'/>
                <input required className='border p-2' type={'email'} name={'email'} placeholder='Email Address' />
                <input required className='border p-2' type={'password'} name='password' placeholder='Create a strong password' />
                <textarea className='border p-2' resize='horizontal' type={'text'} name={'Address'} placeholder='Address'/>
                <input className='border p-2' type={'tel'} name={'phone'} placeholder="Phone Number"/>
                <button className='p-2 bg-blue-500 text-white bg-blue-500 rounded' type={'submit'}>Registar</button>
              </form>
            </div>
        </div>
    );
};
// onSubmit={(e)=> handleAdd(e)}

export default Registar;