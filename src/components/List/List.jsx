import React, { useState } from 'react';
import './List.css';

const List = ({ allOption, correctAnswer }) => {
    const [ans, setAns] = useState(true);
    const handleAns = () => {
        
        if (allOption === correctAnswer) {
            setAns('Right');
        }
        else {
            setAns('Wrong');
        }
    }

    return (
        <div className='list'>
            <div>
            <button onClick={handleAns}><input type="radio" name="radio-4" className="radio radio-accent mx-4 list-outside " /></button>
            </div>
            <p className='text-slate-500 font-semibold text-2xl py-2'>{allOption}</p>
            <p className='font-bold text-green-500 ml-2'>{ans}</p>
        </div>
    );
};

export default List;