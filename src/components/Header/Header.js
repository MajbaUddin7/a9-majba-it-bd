import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import './Header.css';
import NavItem from '../NavItem/NavItem';

const Header = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Topics', path: '/topics' },
        { id: 3, name: 'Statistics', path: '/statistics' },
        { id: 4, name: 'Blog', path: '/blog' }
    ]
    return (
        <div className="header text-slate-50 mb-10 w-full">
            <div className="nav-container flex justify-between py-10">
                <div className="logo">
                    <h2 className='text-2xl font-semibold'>Majba IT <span className='bg-white text-black font-bold rounded-xl p-2'>BD</span></h2>
                </div>
                <nav className=''>
                    <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
                        {open ? <XMarkIcon /> : <Bars3Icon />}
                    </div>
                    <ul className={`w-full md:flex sm:flex-row justify-center absolute duration-300 ease-in md:static ${open ? 'top-[95px] left-0' : 'top-[-500px]'}`}>
                        {
                            routes.map(route => <NavItem key={route.id} route={route}></NavItem>)
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;