import React from 'react';
import { Link } from 'react-router-dom';

const Links = ({ route }) => {
    console.log(route);
    return (
        <div>
            <Link className='mx-3 p-1 font-semibold hover:bg-slate-300 hover:text-orange-600'>{route.name}</Link>
        </div>
    );
};

export default Links;