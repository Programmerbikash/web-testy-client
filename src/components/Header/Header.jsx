import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import NavBar from '../NavBar/NavBar';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {id: 1, name: 'Home', path: '/'},
        {id: 1, name: 'Statistics', path: '/statistics'},
        {id: 1, name: 'Blog', path: '/blog'},
        {id: 1, name: '404 Page', path: '/error'}
    ]
    return (
        <div className='header'>
            <div className="bg-base-100 shadow-gray-400 shadow-2xl w-full h-28">
                {/* <div className="flex-1 ml-32">
                    <img src={logo} alt="" />
                    <Link className="link no-underline normal-case text-3xl">Web Testy</Link>
                </div> */}
                <div className="logo float-left ml-10 mt-6 flex align-middle justify-center">
                <img src={logo} alt="" />
                    <Link className="link no-underline normal-case text-3xl">Web Testy</Link>
                </div>
                <div className="float-right mr-10 flex justify-center align-middle mt-6">
                    <Link>Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;