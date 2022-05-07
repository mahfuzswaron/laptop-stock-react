import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../Firebase/firebase.init';
const style = {
    'backgroundColor': 'blue',
    'opacity': '50%'
}

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <p>loading...</p>
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
                        <Link className='hover:font-bold' to={'/manageinventories#add-items'}>ADD ITEMS</Link>
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