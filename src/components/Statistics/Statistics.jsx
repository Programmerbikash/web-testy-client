import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const quiz = useLoaderData().data;
    return (
        <div>
            <h2>Statistics {quiz.length}</h2>
        </div>
    );
};

export default Statistics;