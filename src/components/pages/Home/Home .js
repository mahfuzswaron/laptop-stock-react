import React from 'react';
import { Link } from 'react-router-dom';
import UseInventories from '../../../hooks/UseInventories';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    const [inventories] = UseInventories([]);
    const inventories6 = inventories.slice(0, 6);
    return (
        <div>
            <div className='flex items-start'>
                <div className='mt-10 ml-5 w-1/2'>
                    <h1 className='text-6xl font-semibold text-gray-500 '>Welcome to <span className='block mt-1 text-7xl text-blue-500'>Laptop Stock</span></h1>
                    <p className='mt-5'>
                        Laptop Stock is a place where the world's best Laptops are stored. Browse the app to add yours and manage them.
                        Have a nice day. 
                    </p>
                </div>
                <div className=' right-5 w-1/2'>
                     <img className='w-3/4 relative left-16 bottom-10' src='https://i.ibb.co/WtkBh27/HTB1v4-XLa-KT2g-K0j-SZFvq6xn-FXXa-C.jpg' alt='laptop' />
                </div>

            </div>

            <div >
                <h1 className='text-blue-500 font-semibold text-center text-4xl'>Inventories ({inventories6?.length}/{inventories?.length})</h1>
                <div className='grid grid-cols-2 mt-5 '>
                     {
                    inventories6.map(inv => <Inventory 
                        key={inv._id}
                        inventory={inv}
                    ></Inventory>)
                }
                </div>
                {
                    inventories.length > 0
                    &&
                    <div className='flex justify-center space-x-4 mx-auto'>
                        <button className='w-48 py-2 px-5 hover:bg-blue-700 text-white bg-blue-500 rounded'><Link to={'/inventories'}>See All</Link></button>
                        <button className='w-48 py-2 px-5 hover:bg-blue-700 text-white bg-blue-500 rounded'><Link to={'/manageinventories'}>Manage Inventories</Link></button>
                        
                    </div>            
}
            </div>
        </div>
    );
};

export default Home ;