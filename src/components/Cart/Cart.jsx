import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ quiz }) => {
    const { id, name, total, logo } = quiz;
    // console.log(quiz);
    
    return (
        <div className='grid-cart'>
            <div className="card bg-slate-50 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="cart-flex">
                        <h2 className="text-2xl m-3">{name}</h2>
                    <h2 className="text-2xl">Total: {total}</h2>
                    <Link to={`/quiz/${id}`}><button className="btn btn-primary m-3">Let's start quiz</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;