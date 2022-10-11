import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

const Statistics = () => {
    const quiz = useLoaderData().data;
    return (
        <div>
            <h2>Statistics {quiz.length}</h2>
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Statistics;