import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';


const InventoryDetails = () => {

    const { id } = useParams();
    const [inventory] = useInventory(id);
    const { name, _id, description, price, supplier, sold, quantity, img } = inventory;
    const [amount, setAmount] = useState("");

    if (!inventory) {
        return <p>loading...</p>
    }

    const handleQuantity = (type) => {

        const update = { quantity, sold }

        if (type === 'add') {
            update.quantity = parseInt(amount) + parseInt(quantity);
        }

        if (type === 'del') {
            if (parseInt(amount) < quantity) {
                update.quantity = parseInt(quantity) - parseInt(amount);
                update.sold = parseInt(sold) + parseInt(amount);
            }
            else {
                alert("insufficiant quantity")
            }
        }

        setAmount("")

        fetch(`https://laptop-stock-server.herokuapp.com/laptop/update?id=${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className='bg-white border hover:drop-shadow-xl p-5 m-5'>

            <div className='grid grid-cols-12 gap-3'>
                <div className='card-img flex justify-center col-span-5'>
                    <img className='w-full' src={img} alt={name} />
                </div>

                <div className='card-body col-span-7'>
                    <h3 className='text-2xl text-blue-400 font-medium'>{name}</h3>
                    <p className='mt-1'>Product id: {_id}</p>
                    <p className='mt-1'>{description}</p>
                    <p className='mt-1'><strong>${price}</strong></p>
                    <p className='mt-1'>{sold} sold</p>
                    <p className='mt-1'>{quantity} available </p>
                    <p className='mt-1'>Supplier: {supplier}</p>
                    <div className='grid grid-cols-12 '>
                        <button
                            id='del'
                            className='btn btn-error col-span-1 rounded-none'
                            onClick={() => handleQuantity("del")}
                            disabled={!amount}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                            </svg>
                        </button>
                        <input
                            type={"number"}
                            placeholder={"quantity"}
                            className="input col-span-3 rounded-none"
                            onChange={(e) => setAmount(e.target.value)}
                            value={amount}
                        />
                        <button
                            id='add'
                            className='btn btn-success col-span-1 rounded-none'
                            onClick={() => handleQuantity("add")}
                            disabled={!amount}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <button className='w-48 flex mx-auto mt-10 mb-5 py-2 px-5 text-white bg-blue-500 hover:bg-blue-700 rounded'><Link to={'/manageinventories'}>Manage Inventories</Link></button>
        </div>
    );
};

export default InventoryDetails;