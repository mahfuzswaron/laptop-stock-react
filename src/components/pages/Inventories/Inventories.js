import { useState } from 'react';
import { Link } from 'react-router-dom';
import UseInventories from '../../../hooks/UseInventories';
import Inventory from '../Inventory/Inventory';
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Inventories = () => {
    const [inventories] = UseInventories([]);
    if (!inventories?.length) {
        return <div className='flex justify-center items-center h-screen'>
            <BeatLoader loading={true} color={'blue'} style={override} size={10}></BeatLoader>
        </div>
    }
    return (
        <section className='mt-10'>
            <h1 className='text-primary font-semibold text-center text-4xl'>Inventories</h1>

            <div className='grid grid-cols-3 mt-5 '>
                {
                    inventories.map(inv => <Inventory
                        key={inv._id}
                        inventory={inv}
                    ></Inventory>)
                }
            </div>
            <div className='flex justify-center'>
                <button className='btn btn-primary btn-outline mt-2 w-48 '><Link to={'/manageinventories'}>Manage Inventories</Link></button>
            </div>
        </section>
    );
};

export default Inventories;