import { css } from '@emotion/react';
import React from 'react';
import { BeatLoader } from 'react-spinners';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;
const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <BeatLoader loading={true} color={'blue'} style={override} size={10}></BeatLoader>
        </div>
    );
};

export default Spinner;