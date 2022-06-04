import React, { useState } from 'react';

const NewRegistar = () => {
    const [error, setError] = useState(false);
    const [name, setName] = useState('');
    const handleOnBlur = () => {
        if (!name) {
            setError(true);
        }
        else {
            setError(false)
        }
        console.log(error);
    }
    const handleOnChange = async (e) => {
        await setName(e.target.value);
        console.log(name, 'before')
        if (name.length > 0) {
            console.log(name, 'after');
            setError(false)
        }
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            <p >Name</p>
            <input onKeyUp={handleOnChange}
                onBlur={handleOnBlur}
                placeholder='Enter your name ' className={`input ${error && 'border-1 border-red-500'}`} type="text" value={name} />
        </div>
    );
};

export default NewRegistar;