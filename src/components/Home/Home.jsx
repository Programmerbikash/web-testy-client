import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import img from '../../images/background.png';
import './Home.css';

const Home = () => {
    const quizs = useLoaderData().data;
    // console.log(quizs);
    return (
        <div className="main">
            <div className="banner-part">
                <img className='w-full h-80' src={img} alt="" />
            </div>
            <div className='home'>
                {
                    quizs.map(quiz => <Cart
                        key={quiz.id}
                        quiz={quiz}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default Home;