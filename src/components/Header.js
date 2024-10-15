
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const Header = ()=>{
    const [menuOpen, setMenuOpen] = useState(false);

    // show hide menu
    const toggleMenu=()=>{
        setMenuOpen(!menuOpen);
    }

    return(
        <header className="container mx-auto">
            <div className="header-main p-5 flex justify-between items-center">
                <div className="logo">
                    <p>here logo</p>
                </div>
                <div className="navbar">
                    <div onClick={toggleMenu} className="toggle-btn relative w-8 h-8 md:hidden">
                        <div className={`menu-iocn text-3xl ${menuOpen ? 'hidden': ''}`}><CiMenuFries /></div>
                        <div className={`close-icon absolute top-0 left-0 text-4xl ${menuOpen ? '': 'hidden'}`}><IoCloseOutline /></div>
                    </div>
                    <nav className={
                        `main-nav absolute top-10 left-0 w-full h-full
                        p-5 transition-all duration-300 ease-in-out ${menuOpen ? '': 'hidden'}
                        md:relative md:!block md:p-0 md:top-0
                      `

                    }>
                        <ul className="space-y-3 md:flex md:space-y-0 md:space-x-20">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Portfolio</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul> 
                    </nav>
                </div>
            </div>
        </header>
    )
}


export default Header;