
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

import { useState } from "react";

const Header = ()=>{
    const [menuOpen, setMenuOpen] = useState(false);

    // show hide menu
    const toggleMenu=()=>{
        setMenuOpen(!menuOpen);
    }

    return(
        <header className="container mx-auto">
            <div className="header-main py-5 px-5  flex justify-between items-center">
                <div className="logo">
                    <div className="w-10 h-10 border border-black flex justify-center items-center text-2xl font-bold">
                        M.
                    </div>
                </div>
                <div className="navbar">
                    <div onClick={toggleMenu} className="toggle-btn relative w-8 h-8 md:hidden">
                        <div className={`menu-iocn text-3xl ${menuOpen ? 'hidden': ''}`}><IoMenuOutline /></div>
                        <div className={`close-icon absolute top-0 left-0 text-3xl ${menuOpen ? '': 'hidden'}`}><IoCloseOutline /></div>
                    </div>
                    <nav className={
                        `main-nav absolute top-20 left-0 w-full h-full
                        bg-white border-t 
                        z-10
                        p-5 transition-all duration-1000 ease-in-out ${menuOpen ? '': 'hidden'}
                        md:relative md:!block md:p-0 md:top-0 md:translate-x-0 md:border-none 
                      `

                    }>
                        <ul className="space-y-3 md:flex md:space-y-0 md:space-x-20">
                            <li>
                                <a href="#home" className="text-primary text-base transition-all duration-300 ease-in-out hover:text-secondary">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="text-primary text-base transition-all duration-300 ease-in-out hover:text-secondary">About</a>
                            </li>
                            <li>
                                <a href="#services" className="text-primary text-base transition-all duration-300 ease-in-out hover:text-secondary">Services</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="text-primary text-base transition-all duration-300 ease-in-out hover:text-secondary">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-primary text-base transition-all duration-300 ease-in-out hover:text-secondary">Contact</a>
                            </li>
                        </ul> 
                    </nav>
                </div>
            </div>
        </header>
    )
}


export default Header;