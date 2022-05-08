import React from 'react';

const Qna = ({ qna }) => {
    const {question, answer} = qna
    return (
        <div className='px-3  m-5 rounded  border-l-4 border-blue-500'>
            <h4 className='text-2xl font-semibold '>{question}</h4>
            <p className='text-lg whitespace-pre-line'>{ answer}</p>
        </div>
    );
};

export default Qna;