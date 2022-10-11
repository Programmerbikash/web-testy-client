import React from 'react';
import './List.css';
import { Link } from 'react-router-dom';

const List = ({allOption}) => {
    return (
        <div className='list'>
            <input type="radio" name="radio-4" className="radio radio-accent mx-4 list-outside " />
            <Link><p className='text-slate-500 font-semibold text-2xl py-2'>{allOption}</p></Link>
        </div>
    );
};

export default List;