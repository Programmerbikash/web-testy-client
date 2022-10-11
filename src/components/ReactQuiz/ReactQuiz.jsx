import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOfReact from '../QuizOfReact/QuizOfReact';

const ReactQuiz = () => {
    const quiz = useLoaderData().data;
    const { name, logo, questions } = quiz;
    // console.log(questions);
    return (
        <div>
            <h2 className="text-3xl">Total Quiz: {quiz.total}</h2>
            <div className="quiz w-full">
                <h2 className='text-4xl'>{name} Quiz</h2>
                {
                    questions.map(reactquez => <QuizOfReact
                        key={reactquez.id}
                        reactquez={reactquez}
                    ></QuizOfReact>)
                }
            </div>
        </div>
    );
};

export default ReactQuiz;