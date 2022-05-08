import { css } from '@emotion/react';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import auth from '../Firebase/firebase.init';
const style = {
    'backgroundColor': 'blue',
    'opacity': '50%'
};

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
    const handleSignOut =async () =>{
        await signOut(auth)
    }
    return (
        <nav className='mx-auto sticky top-0 z-10 '>
            <div style={style} className='flex justify-center items-center mb-5 space-x-4 mx-auto bg-transparant text-white h-16 '>
            <Link className='hover:font-bold' to={'/home'}>HOME</Link>
            <Link className='hover:font-bold' to={'/inventories'}>INVENTORIES</Link>
            
                {
                    user
                        ?
                        <>
                        <Link className='hover:font-bold' to={'/manageinventories'}>MANAGE INVENTORIES</Link>
                        <Link className='hover:font-bold' to={'/additem'}>ADD ITEM</Link>
                        <Link className='hover:font-bold' to={'/myitems'}>MY ITEMS</Link>
                        <Link className='hover:font-bold' to={'/blogs'}>BLOGS</Link>
                        <p className='hover:font-bold' style={{'cursor': 'pointer'}} onClick={handleSignOut}>LOG OUT</p>
                        
                        </>
                        :
                        <>
                        <Link className='hover:font-bold' to={'/blogs'}>BLOGS</Link>
                        <Link className='hover:font-bold' to={'/login'}>LOG IN</Link>
                        </>
            
            }
            </div>
        </nav>
    );
};

export default Header;