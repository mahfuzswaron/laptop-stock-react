import React, { useState } from 'react';

const Calculator = () => {
    const [total, setTotal] = useState(0);

    return (
        <div className='w-1/3 mx-auto'>
            <h3 className='text-3xl text-blue-500 font-semibold text-center my-10'>Total Price Calculator</h3>
            <div className='display w-full h-24 border flex justify-center items-center text-2xl'>
                <p>${total}</p>
            </div>
            <form className=''>
                <div className=''>
                    <input className='w-1/2 p-3 border my-1' type={'number'} name='quantity' placeholder='quantity' />
                    <input className='w-1/2 p-3 border my-1' type={'number'} name='price' placeholder='price' />
                </div>
                <button className='bg-green-500 hover:bg-green-600 px-5 py-3 w-full text-white font-bold text-3xl' type='submit' >=</button>
            </form>
            
        </div>
    );
};

export default Calculator;