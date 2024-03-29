import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip } from 'recharts';
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
            <section className='flex items-center bg-[#EFEFEF] py-8'>
                <div className='flex items-center reveal lg:mx-20 mx-10'>
                    <div className='w-1/2 h-1/2'>
                        <h1 className='lg:text-6xl sm:text-3xl font-semibold text-seconary '>Welcome to <span className='block lg:text-7xl sm:text-4xl text-primary'>Laptop Stock</span></h1>
                        <p className='lg:mt-5 my-2 text-[9px] lg:text-lg'>
                            Laptop Stock is a place where the world's best Laptops are stored. Browse the app to add yours and manage them.
                            Have a nice day.
                        </p>
                        <button className='btn btn-sm md:btn-md lg:btn-lg btn-primary btn-outline text-xs lg:text-lg" '><Link to={'/inventories'}>Let's Start <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg></Link></button>

                    </div>
                    <div className='w-1/2 h-1/2 flex justify-center items-start'>
                        <img className='lg:w-4/5 w-full' src='https://i.ibb.co/vvsJwwx/laptop-vector-01.png' alt='laptop' />
                    </div>
                </div>
            </section>

            {/* inventories section starts */}
            <section className='my-10 reveal mx-10 lg:mx-20'>
                <h1 className='text-primary font-semibold text-center text-2xl lg:text-4xl'>Inventories</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 mt-5 mb-3'>
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
                    <div className='flex justify-center space-x-4 items-center mx-auto'>
                        <Link className='btn btn-primary mt-2 lg:w-48 sm:w-5 ' to={'/inventories'}>
                            See All
                        </Link>
                        <Link className='btn btn-primary btn-outline mt-2 lg:w-48 sm:w-5' to={'/manageinventories'}>
                            Manage Inventories
                        </Link>
                    </div>

                }
            </section>
            {/* -------------------- */}

            {/* Calculator section starts  */}
            <section className='bg-[#EFEFEF] py-20 reveal'>
                <Calculator></Calculator>
            </section>

            {/* graph chart section starts */}
            <section className='mt-20 reveal mb-10 w-full lg:h-[500px] h-[250px]'>
                <h3 className='lg:text-4xl text-2xl text-primary font-semibold text-center mb-5'>Sale Analytics Chart</h3>
                <div className='flex justify-center mx-auto w-full  h-4/5'>
                    <ResponsiveContainer width="90%" height="100%">
                        <BarChart data={inventories}>
                            <Bar dataKey="sold" stackId="a" fill="#0490f4" />
                            <Bar dataKey="quantity" stackId="a" fill="#0031B8" />
                            <Tooltip></Tooltip>
                            <Legend verticalAlign="top" height={36}></Legend>
                        </BarChart>
                    </ResponsiveContainer>
                </div>


            </section >
        </div >
    );
};

export default Home;