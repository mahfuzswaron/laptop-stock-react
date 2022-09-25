import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = (props) => {
    const { inventory } = props;
    const { name, description, price, quantity, img, _id, supplier } = inventory;

    return (
        <div className='flex-col items-center justify-center rounded-lg bg-white  drop-shadow-xl p-3 m-1 lg:m-5'>

            <div className='card-img flex justify-center items-center'>
                <img className='w-3/5' src={img} alt={name} />
            </div>

            <div className='card-body text-left '>
                <h3 className='text-2xl text-primary font-medium truncate' title={name}>{name}</h3>
                <p className='mt-1 ' title={description} >{
                    description.split(" ").slice(0, 20).map(e => e + " ")
                }</p>

                <div className='flex justify-between items-center'>
                    <p className='mt-1 flex space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-success">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <strong>{price}</strong>
                    </p>
                    <p className='flex space-x-2 ' title='available'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-warning">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                        </svg>
                        <span>{quantity}</span>
                    </p>
                    <p className='flex space-x-2 ' title='supplier'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{supplier.split(" ")[0]}</span>
                    </p>
                </div>

                <button className='btn btn-primary mt-2 w-full text-white '><Link to={`/inventory/${_id}`}>Update</Link></button>
            </div>
        </div>
    );
};

export default Inventory;