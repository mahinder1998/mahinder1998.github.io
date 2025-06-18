import { CiHome, CiUser, CiFileOn } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import { IoAppsOutline } from "react-icons/io5";
import { useState } from "react";

const menuItems = [
    {
        "icon": <CiHome />,
        "label": "Home",
        "url": "#home"
    },
    {
        "icon": <CiUser />,
        "label": "About",
        "url": "#about"
    },
    {
        "icon": <CiFileOn />,
        "label": "Skill",
        "url": "#skill"
    },
    {
        "icon": <CiHome />,
        "label": "Qualifications",
        "url": "#qualifications"
    },
    {
        "icon": <CiHome />,
        "label": "Project",
        "url": "#project"
    },
    {
        "icon": <CiHome />,
        "label": "Contact Me",
        "url": "#contact"
    }
];

const HeaderNew = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openMenuColl = () => setIsMenuOpen(true);
    const closeMenuColl = () => setIsMenuOpen(false);
    return (
        <header className="fixed bottom-0 w-full 
            md:relative
        ">
            <div className="container  max-w-[968px] mx-auto">
                <nav className="p-4 flex justify-between md:py-6">
                    {/* logo */}
                    <h1 className="md:text-lg">Mb</h1>

                    {/* navbar */}
                    <div className={`menu absolute w-full left-0 bottom-0 bg-white rounded-t-3xl shadow-[0_-1px_4px_rgba(0,0,0,0.15)] 
                    transition duration-300 ${isMenuOpen ? '' : 'translate-y-[100%]'}
                    
                    md:relative md:bottom-auto md:top-auto md:translate-y-0 md:shadow-none md:pr-3 md:bg-transparent
                    `}
                    >
                        <ul className="py-10 px-4 pb-16 grid grid-cols-3 gap-9 md:flex md:p-0 md:justify-end md">
                            {menuItems.map((item, index) => (
                                <li key={index} className="flex flex-col justify-center items-center gap-2">
                                    <span className="icon text-lg md:hidden">{item.icon}</span>
                                    <a href={item.url} className="text-sm">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        {/* close */}
                        <span className="close absolute right-6 bottom-6 md:hidden">
                            <button onClick={closeMenuColl}>
                                <IoMdClose />
                            </button>
                        </span>
                    </div>

                    {/* icons */}
                    <div className="flex gap-4">
                        <div className="thememode text-lg">
                            <FiMoon />
                        </div>
                        <div className="toggle text-lg md:hidden">
                            <button onClick={openMenuColl}>
                                <IoAppsOutline />
                            </button>

                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}


export default HeaderNew;



