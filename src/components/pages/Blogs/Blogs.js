import React from 'react';
import Qna from './Qna';

const Blogs = () => {
    const qnas = [
        {
            question: "What are the difference between Javascript and Nodejs?",
            answer: "> Javascript is a programming language. NodeJs is a javascript runtime envirnment.\n > Js is is basically used in frontend development. NodeJs is used in backend development.\n > Js can run only in browser. To run Js outside of browser, we use NodeJs."
        },
        {
            question: "When to use Node and When to use MongoDB?",
            answer: "When we need to store unstructured data on database, we should use MongoDB \n While using data from MongoDB to client-side, we should use NodeJs as server."
        },
        {
            question: "What are the difference between SQL and NoSQL?",
            answer: "> SQL are defined as query language. NoSQL are not a language. \n > SQL are relational database management system (RDBMS). NoSQL are distributed database management system. \n > SQL are suitable for complex data storage. NoSQL are for hierachical data storage"
        },
        {
            question: "What is the purpose of JWT and how does it works?",
            answer: "The purpose of JWT is to authenticate a user and share information. \n It has a part - signature. it contains a specific information about the user and the server varifies the information to authorize the user."
        }
    ];

    return (
        <div>
            <h1 className='text-4xl text-blue-500 font-semibold text-center my-10'>Blogs</h1>
            <div className='w-5/6 mx-auto'>
                {
                    qnas.map(q =>  <Qna
                    key={qnas.indexOf(q)}
                    qna={q}
                    ></Qna>)
                }
            </div>
        </div>
    );
};

export default Blogs;