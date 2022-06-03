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
            <div className='flex justify-between items-center lg:mx-20 mx-10 py-5 lg:py-10 text-[#666666] font-medium bg-white h-16 '>
                <div>
                    <h3 className='lg:text-3xl sm:text-xl text-secondary font-bold'>
                        <Link to={'/home'}><span className='text-primary'>Laptop</span> Stock</Link>
                    </h3>
                </div>
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-20">
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
                                    <p className='border-b-2 border-double border-transparent hover:border-primary text-secondary' style={{ 'cursor': 'pointer' }} onClick={handleSignOut}>LOG OUT</p>

                                </>
                                :
                                <>
                                    <Link className='border-b-2 border-double border-transparent hover:border-primary text-secondary' to={'/blogs'}>BLOGS</Link>
                                    <Link className='border-b-2 border-double border-transparent hover:border-primary text-secondary' to={'/login'}>LOG IN</Link>
                                </>
                        }
                    </div>
                </div>
                <div className='lg:flex space-x-4 items-center hidden '>
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
                                <p className='btn btn-secondary btn-outline ' style={{ 'cursor': 'pointer' }} onClick={handleSignOut}>LOG OUT</p>

                            </>
                            :
                            <>
                                <Link className='border-b-2 border-double border-transparent hover:border-primary text-secondary' to={'/blogs'}>BLOGS</Link>
                                <Link className='btn btn-secondary btn-outline ' to={'/login'}>LOG IN</Link>
                            </>
                    }
                </div>
            </div>
        </nav >
    );
};

export default Header;
// border - b - 2 border - double border - transparent hover: border - primary text - secondary