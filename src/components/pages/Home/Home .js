import React from 'react';
import Inventories from '../Inventories/Inventories';

const Home  = () => {
    return (
        <div>
            <div className='flex items-start'>
                <div className='mt-10 ml-5 w-1/2'>
                    <h1 className='text-6xl font-semibold text-slate-500 '>Welcome to <span className='block mt-1 text-7xl text-blue-500'>Laptop Stock</span></h1>
                    <p className='mt-2'> Laptop Stock is a place where the world's best Laptops are stored.
                        Browse the app to add yours and manage them.
                        Have a nice day. 
                    </p>
                </div>
                <div className=' right-5 w-1/2'>
                     <img className='w-3/4 relative left-16 bottom-10' src='https://i.ibb.co/WtkBh27/HTB1v4-XLa-KT2g-K0j-SZFvq6xn-FXXa-C.jpg' />
                </div>

            </div>

            <Inventories></Inventories>
        </div>
    );
};

export default Home ;