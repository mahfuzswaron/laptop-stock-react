import { Link } from 'react-router-dom';
import UseInventories from '../../../hooks/UseInventories';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories] = UseInventories([]);

    if(!inventories){
        return <p>loading...</p>
    }
    
    return (
        <div>
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