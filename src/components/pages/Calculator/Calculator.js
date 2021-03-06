import React, { useState } from 'react';

const Calculator = () => {
    const [total, setTotal] = useState(0);
    const calculate = (e) => {
        e.preventDefault();
        const quantity = parseInt(e.target.quantity.value);
        const price = parseFloat(e.target.price.value);
        const result = quantity * price;
        setTotal(result);
        e.target.reset();
    }

    return (
        <div className='lg:w-1/3 w-4/5 mx-auto'>
            <h3 className='lg:text-4xl text-2xl text-primary font-semibold text-center mb-5'>Price Calculator</h3>
            <div className='display w-full h-24 border flex justify-center items-center text-2xl rounded-lg bg-white'>
                <p>${total}</p>
            </div>
            <form onSubmit={e => calculate(e)}>
                <div className='flex justify-between'>
                    <input required className='w-1/2 input input-bordered bg-white m-1 ml-0' type={'number'} name='quantity' placeholder='quantity' />
                    <input required className='w-1/2 input input-bordered bg-white m-1 mr-0' type={'number'} name='price' placeholder='price' />
                </div>
                <button className='btn btn-primary w-full font-bold text-3xl' type='submit' >=</button>
            </form>

        </div>
    );
};

export default Calculator;