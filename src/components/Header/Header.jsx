import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='header'>
            <div className="bg-base-100 shadow-gray-100 shadow-xl w-full md:h-16 h-36">
                <div className="logo float-left ml-20 md:mt-2 mt-10 flex align-middle justify-center">
                <img className='w-32 h-32' src={logo} alt="" />
                    <Link className="link no-underline normal-case text-3xl">Web Testy</Link>
                </div>
                <div className="float-right mr-20 flex justify-center align-middle md:mt-4 mt-0">
                <ul className={`md:flex justify-end md:static absolute duration-500 ease-in ${open ? 'top-5' : 'top-[-130px]'}`}>
                    <li className='mx-3 p-1 font-semibold hover:bg-slate-300 hover:text-orange-600'><NavLink to='/home' className={({isActive}) => isActive ? 'active': undefined}>Home</NavLink></li>
                    <li className='mx-3 p-1 font-semibold hover:bg-slate-300 hover:text-orange-600'><NavLink to='/statistics'>Statistics</NavLink></li>
                    <li className='mx-3 p-1 font-semibold hover:bg-slate-300 hover:text-orange-600'><NavLink to='/blog'>Blog</NavLink></li>
                    <li className='mx-3 p-1 font-semibold hover:bg-slate-300 hover:text-orange-600'><NavLink to='/error'>404 Page</NavLink></li>
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