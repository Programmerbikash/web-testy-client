import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const quiz = useLoaderData().data;
    console.log(quiz);
    return (
        <div className='mt-5'>
            <h2 className='text-5xl mb-5 font-extrabold'>Statistics: {quiz.length}</h2>
            <LineChart className='mx-auto' width={450} height={500} data={quiz} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;