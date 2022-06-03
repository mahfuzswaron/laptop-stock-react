import { css } from '@emotion/react';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import auth from '../Firebase/firebase.init';
// const style = {
//     'backgroundColor': 'blue',
//     'opacity': '50%'
// };

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Header = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <div className='flex justify-center items-center'>
            <BounceLoader loading={loading} color={'blue'} style={override} size={10}></BounceLoader>
        </div>
    }
    const handleSignOut = async () => {
        await signOut(auth)
    }
    return (
        <nav className=' bg-white sticky top-0 z-10 '>
            <div className='flex justify-between items-center mx-20 py-10 text-[#666666] font-bold bg-white h-16 '>
                <div>
                    <h3 className='text-3xl text-secondary font-bold'>
                        <Link to={'/home'}><span className='text-primary'>Laptop</span> Stock</Link>
                    </h3>
                </div>
                <div className='flex space-x-4'>
                    <Link className='border-b-2  border-double border-transparent hover:border-primary text-secondary' to={'/home'}>HOME</Link>

                    <Link className='border-b-2 border-double border-transparent hover:border-primary text-secondary' to={'/inventories'}>INVENTORIES</Link>

                    {
                        user
                            ?
                            <>
                                <Link className='border-b-2 border-double border-transparent hover:border-primary text-secondary' to={'/manageinventories'}>MANAGE INVENTORIES</Link>
                                <Link className='border-b-2 border-double border-transparent hover:border-primary text-secondary' to={'/additem'}>ADD ITEM</Link>
                                <Link className='border-b-2 border-double border-transparent hover:border-primary text-secondary' to={'/myitems'}>MY ITEMS</Link>
                                <Link className='border-b-2 border-double border-transparent hover:border-primary text-secondary' to={'/blogs'}>BLOGS</Link>
                                <p className='border-b-2 border-double border-transparent hover:border-[#0030B8]' style={{ 'cursor': 'pointer' }} onClick={handleSignOut}>LOG OUT</p>

                            </>
                            :
                            <>
                                <Link className='border-b-2 border-double border-transparent hover:border-primary text-secondary' to={'/blogs'}>BLOGS</Link>
                                <Link className='border-b-2 border-double border-transparent hover:border-primary text-secondary' to={'/login'}>LOG IN</Link>
                            </>
                    }
                </div>
            </div>
        </nav >
    );
};

export default Header;