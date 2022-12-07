import { useState } from 'react';
import { Link } from 'react-router-dom';
import UseInventories from '../../../hooks/UseInventories';
import Inventory from '../Inventory/Inventory';
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";
import Spinner from "../../shared/Spinner/Spinner";
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Inventories = () => {
    const [inventories] = UseInventories([]);
    if (!inventories?.length) {
        return <Spinner />
    }
    return (
        <section className='mt-10'>
            <h1 className='text-primary font-semibold text-center lg:text-4xl text-3xl'>Inventories</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 mt-5 '>
                {
                    inventories.map(inv => <Inventory
                        key={inv._id}
                        inventory={inv}
                    ></Inventory>)
                }
            </div>
            <div className='flex justify-center'>
                <Link
                    className='btn btn-primary btn-outline mt-2 w-48 '
                    to={'/manageinventories'}
                > Manage Inventories
                </Link>
            </div>
        </section>
    );
};

export default Inventories;