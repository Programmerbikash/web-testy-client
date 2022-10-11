import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReactQuiz = () => {
    const quiz = useLoaderData().data;
    console.log(quiz);
    return (
        <div>
            <h2 className="text-3xl">React Quiz {quiz.total}</h2>
        </div>
    );
};

export default ReactQuiz;