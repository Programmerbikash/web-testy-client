import React, { useState } from 'react';
import List from '../List/List';
import './QuizOfReact.css';
import { EyeIcon } from '@heroicons/react/24/solid';

const QuizOfReact = ({reactquez}) => {
    const { correctAnswer, question, options } = reactquez;
    const [answer, setAnswer] = useState();
    // console.log(reactquez);
    const correctAns = (correctAnswer) => {
        setAnswer(correctAnswer);
    }

    return (
        <div className='quiz-react bg-amber-400 w-5/6 mx-auto mt-3 rounded-3xl relative'>
            <div className='py-5 flex-1'>
            <h1 className='pt-4 text-indigo-500 px-4 text-2xl font-semibold mt-3'>Quiz: {question}</h1>
            {
                options.map(allOption => <List
                    allOption={allOption}
                    correctAnswer={correctAnswer}
                ></List>)
            }
            </div>
            <div className="toast absolute top-32 right-0">
                <div className="alert alert-success">
                    <div>
                        <span className=''>{answer}</span>
                    </div>
                </div>
            </div>
            <button onClick={()=>correctAns(correctAnswer)}><EyeIcon className="h-6 w-6 text-blue-500 absolute top-4 right-5" /></button>
        </div>
    );
};

export default QuizOfReact;