import React, { useState } from 'react';
import './List.css';

const List = ({ allOption, correctAnswer }) => {
    const [ans, setAns] = useState();
    const handleAns = () => {
        
        if (allOption === correctAnswer) {
            setAns(alert('The Answer Is Correct'));
        }
        else {
            setAns(alert('The Answer Is Wrong'));
        }
    }

    return (
        <div className='list'>
            <div>
            <button onClick={handleAns}><input type="radio" name="radio-4" className="radio radio-accent mx-4 list-outside " /></button>
            </div>
            <p className='text-slate-500 font-semibold text-2xl py-2'>{allOption}</p>
        </div>
    );
};

export default List;