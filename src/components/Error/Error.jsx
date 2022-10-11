import React from 'react';
import Header from '../Header/Header';

const Error = () => {
    return (
        <div>
            <Header></Header>
            <h2 className='text-9xl font-extrabold'>4O4</h2>
            <p className='text-7xl font-bold mt-4'>Page Not found!</p>
            <p className='text-6xl font-semibold mt-8'>The requested page was not found!</p>
        </div>
    );
};

export default Error;