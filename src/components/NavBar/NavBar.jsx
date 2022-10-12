import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {id: 1, name: 'Home', path: '/'},
        {id: 1, name: 'Statistics', path: '/statistics'},
        {id: 1, name: 'Blog', path: '/blog'},
        {id: 1, name: '404 Page', path: '/error'}
    ]
    return (
        <nav className='bg-base-200 md:py-5 md:h-16 w-full'>
            <div>
            <div onClick={() => setOpen(!open)} className=" md:hidden" >
            {
                open ?
                    <XMarkIcon/>
                    :
                    <Bars3Icon/>
            }
            </div>
            <ul className={`md:flex justify-end md:static absolute w-full bg-base-200 duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
            </div>
        </nav>
    );
};

export default NavBar;