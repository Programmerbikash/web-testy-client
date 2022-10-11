import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="navbar bg-base-100 shadow-gray-400 shadow-2xl">
                <div className="flex-1 ml-32">
                    <img src={logo} alt="" />
                    <Link className="link no-underline normal-case text-3xl">Web Testy</Link>
                </div>
                <div className="flex-none mr-32">
                    <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/statistics'>Statistics</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/error'>404 Page</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;