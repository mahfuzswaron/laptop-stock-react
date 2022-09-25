import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = (props) => {
    const { inventory } = props;
    const { name, description, price, quantity, img, _id } = inventory;

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

                <div className='grid grid-cols-2'>
                    <p className='mt-1 flex space-x-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-success">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <strong>{price}</strong>
                    </p>
                    <p className='mt-1 flex space-x-4 place-self-end'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <span>{quantity}</span> </p>
                </div>

                <button className='btn btn-primary mt-2 w-full text-white '><Link to={`/inventory/${_id}`}>Update</Link></button>
            </div>
        </div>
    );
};

export default Inventory;