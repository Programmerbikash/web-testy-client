import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import NavBar from '../NavBar/NavBar';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Links from '../Link/Links';

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
            <div className="bg-base-100 shadow-gray-100 shadow-xl w-full md:h-16 h-32">
                <div className="logo float-left ml-20 mt-2 flex align-middle justify-center">
                <img className='w-32 h-32' src={logo} alt="" />
                    <Link className="link no-underline normal-case text-3xl">Web Testy</Link>
                </div>
                <div className="float-right mr-20 flex justify-center align-middle md:mt-4 mt-0">
                <ul className={`md:flex justify-end md:static absolute duration-500 ease-in ${open ? 'top-5' : 'top-[-120px]'}`}>
                    {
                        routes.map(route => <Links
                            key={route.id}
                            route={route}
                        ></Links>)
                    }
                </ul>
                <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden" >
                {
                    open ?
                        <XMarkIcon/>
                        :
                        <Bars3Icon/>
                }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Header;