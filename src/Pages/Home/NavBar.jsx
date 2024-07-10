import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import LogoImage from '../../data/images/Frame.svg';
import Menu from '../../data/images/circle-Menu.svg';
import MenuClose from '../../data/images/circle-menu-Close.svg';

export default function NavBar() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const showSidebar = () => {
        setIsSidebarVisible(true);
    };

    const hideSidebar = () => {
        setIsSidebarVisible(false);
    };

    return (
        <nav className="flex justify-between gap-5 items-center pb-5">
            <div className="flex justify-between py-2 lg:px-5 rounded-lg items-center lg:flex-grow lg:border-2">
                <div>
                    <Link to="/Home">
                        <img src={LogoImage} alt="Logo" className="object-contain h-full" />
                    </Link>
                </div>
                <div className="space-x-7 hidden lg:flex">
                    <div>
                    <Link to="Home" >
                        <p>Work</p>
                    </Link>
                    </div>
                    <div><Link to="/about"><p>Contact</p></Link></div>
                    <div>
                        <a href="https://drive.google.com/file/d/1hGsK7_IW2eaE4IW-kAo6RXmrInj8gsHx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <p>Resume</p>
                        </a>
                    </div>
                </div>
            </div>
            <button className="text-black bg-white border-2 py-5 px-5 rounded-lg items-center hidden lg:flex">
                <a href="https://www.linkedin.com/in/patricktuyishime/" target="_blank" rel="noopener noreferrer">
                    <p>LinkedIn</p>
                </a>
            </button>
            <div className="flex lg:hidden">
                <img onClick={showSidebar} src={Menu} alt="Menu" className={`menu ${isSidebarVisible ? 'hidden' : 'flex'}`} />
            </div>
            <div className={`bg-slate-500 text-black sideMenu flex-col overflow-hidden rounded-md fixed top-0 right-0 h-screen w-[550px] z-[999] mt-0 bg-white/70 backdrop-blur-sm shadow-[-10px_0_10px_rgba(0,0,0,0.1)] flex items-center justify-center gap-[40px] font-bold ${isSidebarVisible ? 'flex' : 'hidden'}`}>
                <img onClick={hideSidebar} src={MenuClose} alt="Close Menu" className={`closeMenu h-10 absolute top-[50px] right-[110px] ${isSidebarVisible ? 'flex' : 'hidden'}`} />
                <div><Link to="/work"><p>Work</p></Link></div>
                <div><Link to="/about"><p>Contact</p></Link></div>
                <div>
                <a href="https://drive.google.com/file/d/1hGsK7_IW2eaE4IW-kAo6RXmrInj8gsHx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <p>Resume</p>
                </a>
                </div>
            </div>
        </nav>
    );
}
