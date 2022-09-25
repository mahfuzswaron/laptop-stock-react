import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import Spinner from '../../shared/Spinner/Spinner';


const InventoryDetails = () => {

    const { id } = useParams();
    const [inventory] = useInventory(id);
    const { name, _id, description, price, supplier, sold, quantity, img } = inventory;
    const [amount, setAmount] = useState("");

    if (!inventory) {
        return <Spinner />
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
        <div className='bg-white p-2 m-2 lg;p-5 lg:m-5'>

            <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
                <div className='card-img flex justify-center lg:col-span-5'>
                    <img className='w-full' src={img} alt={name} />
                </div>

                <div className='card-body lg:col-span-7'>
                    <h3 className='text-2xl text-blue-400 font-medium'>{name}</h3>
                    <small >Product id: <em>{_id}</em> </small>
                    <span className=''>{description}</span>

                    <div className='flex justify-between my-3 flex-wrap'>
                        <p className='flex space-x-4 items-center' title='price'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-success">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <strong>{price}</strong>
                        </p>
                        <p className='flex space-x-4 items-center' title='sold'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-success">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{sold}</span>
                        </p>

                        <p className='flex space-x-4 items-center place-self-end' title='available'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-warning">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                            </svg>
                            <span>{quantity}</span>
                        </p>
                        <p className='flex space-x-4 items-center ' title='supplier'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{supplier}</span>
                        </p>
                    </div>

                    <div className='grid grid-cols-4 lg:grid-cols-12 '>
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
                            className="input col-span-2 lg:col-span-3 rounded-none"
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
            <button className='btn btn-primary mx-auto block'><Link to={'/manageinventories'}>Manage Inventories</Link></button>
        </div>
    );
};

export default InventoryDetails;