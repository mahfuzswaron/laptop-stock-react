import React from 'react';

const Qna = ({ qna }) => {
    const {question, answer} = qna
    return (
        <div className='p-3 m-5 rounded  border-l-4 border-blue-500'>
            <h4 className='text-2xl '>{question}</h4>
            <p className='text-xl whitespace-pre-line'>{ answer}</p>
        </div>
    );
};

export default Qna;