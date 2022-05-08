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
    // const [loading, setLoading] = useState(false)

    // if(!inventories){
    //     const set = async () => await setLoading(true)
    //     set();
    //     // return <p>loading...</p>
    // }
    // if (loading) {
    //     return 
    // }
    return (
        <div>
            <BeatLoader loading={!inventories} color={'blue'} style={override} size={150}></BeatLoader>
            <h1 className='text-blue-500 font-semibold text-center text-4xl'>Inventories ({inventories?.length})</h1>
            <div className='grid grid-cols-2 mt-5 '>
                {
                    inventories.map(inv => <Inventory 
                        key={inv._id}
                        inventory={inv}
                    ></Inventory>)
                }
            </div>
            {
                inventories.length > 0
                &&
                <button className='w-48 py-2 px-5 flex mx-auto hover:bg-blue-700 text-white bg-blue-500 rounded'><Link to={'/manageinventories'}>Manage Inventories</Link></button>}
        </div>
    );
};

export default Inventories;