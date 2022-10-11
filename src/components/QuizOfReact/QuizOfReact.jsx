import React from 'react';
import List from '../List/List';
import './QuizOfReact.css';

const QuizOfReact = ({reactquez}) => {
    const { question, options } = reactquez;
    // console.log(reactquez);
    return (
        <div className='quiz-react bg-amber-400 w-5/6 mx-auto mt-3 rounded-3xl'>
            <h1 className='pt-4 text-indigo-500 px-4 text-2xl font-semibold mt-3'>Quiz: {question}</h1>
            <div className='py-5 flex-1'>
            {
                options.map(allOption => <List allOption={allOption}></List>)
            }
            </div>
        </div>
    );
};

export default QuizOfReact;