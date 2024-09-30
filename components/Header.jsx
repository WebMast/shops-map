"use client";

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    }
    return (
        <header className="flex justify-between items-center relative w-full py-4 text-black mb-8">
            <div className="relative z-10 text-2xl cursor-pointer" onClick={toggleMenu}>&#9776;</div>
            <Link href='/'>
                <Image src='/logo.png' alt="Urban Thread" width={100} height={71} className='object-contain'/>
            </Link>
            <div>
                <Link className="outline_btn" href='#'>Sign In</Link>
            </div>
            <div className={`slide-menu ${menuOpen ? 'open' : ''}`}>
                <Link className="block" href='/contact-us' onClick={toggleMenu}>Contact Us</Link>
                <Link className="block my-3" href='/terms-and-conditions' onClick={toggleMenu}>Terms and conditions</Link>
                <Link className="block" href='/about-us' onClick={toggleMenu}>About Us</Link>
            </div>
            {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </header>
    )
}

export default Header;