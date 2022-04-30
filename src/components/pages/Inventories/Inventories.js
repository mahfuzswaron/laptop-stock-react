import React, { useEffect, useState } from 'react';
import UseInventories from '../../../hooks/UseInventories';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories] = UseInventories([]);
    
    if(!inventories){
        return <p>loading...</p>
    }

    console.log(inventories, 'from outside fetch')
    return (
        <div>
            <h1 className='text-blue-400 text-center text-4xl'>Inventories ({inventories?.length})</h1>
            <div className='grid grid-cols-2 gap-4 mt-5'>
                {
                    inventories.map(inv => <Inventory 
                        inventory={inv}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;