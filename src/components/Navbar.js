import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => setMenu(!menu);
    const [colorBgMenu, setColorBgMenu] = useState(false);

    const handleColor = () => {
        if (window.scrollY >= 100)
            setColorBgMenu(true)
        else
            setColorBgMenu(false)
    }
    window.addEventListener('scroll', handleColor)
    return (
        <header className={`fixed w-full h-[90px] flex justify-between items-center p-4 z-10 ${colorBgMenu && 'bg-dark-minor'}`}>
            <Link to="/">
                <h1 className="font-bold text-xl lg:text-3xl z-50">GLX-TRVL</h1>
            </Link>
            <ul className={`Menu flex ${menu ? 'right-0 opacity-100' : 'right-[-100%] opacity-0'}`}>
                <li className="px-4 block">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4 block">
                    <Link to="/Pricing">Pricing</Link>
                </li>
                <li className="px-4 block">
                    <Link to="/Training">Training</Link>
                </li>
                <li className="px-4 block">
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
            {menu ? (
                <AiOutlineClose className="lg:hidden z-40 text-3xl animate-RightToMid cursor-pointer text-white" onClick={handleMenu}></AiOutlineClose>
            ) : (
                <BiMenuAltRight className="lg:hidden z-40 text-3xl animate-RightToMid cursor-pointer text-white" onClick={handleMenu}></BiMenuAltRight>
            )}
        </header>
    );
};

export default Navbar;
