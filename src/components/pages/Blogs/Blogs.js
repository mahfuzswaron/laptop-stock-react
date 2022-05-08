import React, { useEffect, useState } from 'react';
import Qna from './Qna';

const Blogs = () => {
    const [qnas, setQnAs] = useState([]);
    useEffect(() => {
        fetch('https://laptop-stock-server.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setQnAs(data))
        
    }, [qnas]);
    console.log(qnas)
    return (
        <div>
            <h1 className='text-4xl text-blue-500 font-semibold text-center my-10'>Blogs</h1>
            <div className='w-5/6 mx-auto'>
                {
                    qnas.map(q =>  <Qna
                    key={q._id}
                    qna={q}
                    ></Qna>)
                }
            </div>
        </div>
    );
};

export default Blogs;