import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { Bar, BarChart, Legend, Tooltip } from 'recharts';
import UseInventories from '../../../hooks/UseInventories';
import Calculator from '../Calculator/Calculator';
import Inventory from '../Inventory/Inventory';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const Home = () => {
    const [inventories] = UseInventories([]);
    const inventories6 = inventories.slice(0, 6);
    if (!inventories?.length) {
        return <div className='flex justify-center items-center h-screen'>
            <BeatLoader loading={true} color={'blue'} style={override} size={10}></BeatLoader>
        </div>
    }
    return (
        <div>
            <section className='flex items-center bg-[#EFEFEF]'>
                <div className='flex items-start '>
                    <div className='mt-10 ml-5 w-1/2'>
                        <h1 className='text-6xl font-semibold text-seconary '>Welcome to <span className='block mt-1 text-7xl text-primary'>Laptop Stock</span></h1>
                        <p className='mt-5'>
                            Laptop Stock is a place where the world's best Laptops are stored. Browse the app to add yours and manage them.
                            Have a nice day.
                        </p>
                    </div>
                    <div className=' right-5 w-1/2'>
                        <img className='w-3/4 relative left-16 bottom-10' src='https://i.ibb.co/QPxPqLs/laptop.png' alt='laptop' />
                    </div>
                </div>
            </section>

            {/* inventories section starts */}
            <section className='my-10'>
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
            </section>
            {/* -------------------- */}

            {/* Calculator section starts  */}
            <section>
                <Calculator></Calculator>
            </section>

            {/* graph chart section starts */}
            <section className=''>
                <h3 className='text-3xl text-blue-500 font-semibold text-center my-10'>Sale Analytics Chart</h3>
                <div className='flex justify-center mx-auto '>
                    <BarChart className='' width={800} height={400} data={inventories}>
                        <Bar dataKey="sold" fill="#8884d8" />
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                    </BarChart>
                </div>


            </section>
        </div>
    );
};

export default Home;