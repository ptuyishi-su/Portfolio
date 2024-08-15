import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
        <nav>
            <motion.div className="flex justify-between gap-5 items-center pb-5"
                initial={{ opacity: 0, y: -70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}>
                <div className="flex justify-between py-2 lg:px-5 rounded-lg items-center lg:flex-grow lg:border-2">
                    <div>
                        <Link to="/Home">
                            <img src={LogoImage} alt="Logo" className="object-contain h-full" />
                        </Link>
                    </div>
                    <div className="space-x-7 hidden lg:flex">
                        <div>
                            <Link to="/work"><p>Work</p></Link>
                        </div>
                        <div><Link to="/about"><p>Contact</p></Link></div>
                        <div>
                            <a href="https://drive.google.com/file/d/1MxnkMychiTgD5AjzsQi0406iJNSlPRY0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
                
                <AnimatePresence>
                    {isSidebarVisible && (
                        <motion.div 
                            className="bg-slate-500 text-black sideMenu flex-col overflow-hidden rounded-md fixed top-0 right-0 h-screen w-[550px] z-[999] mt-0 bg-white/70 backdrop-blur-md shadow-[-10px_0_10px_rgba(0,0,0,0.1)] flex items-center justify-center gap-[40px] font-bold"
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 200 }}
                            transition={{ duration: 0.5 }}>
                            <img onClick={hideSidebar} src={MenuClose} alt="Close Menu" className="closeMenu h-10 absolute top-[30px] right-[30px]" />
                            <div className="justify-start">
                                <Link to="/work" onClick={hideSidebar}><p className="text-6xl font-black">Work</p></Link>
                            </div>
                            <div><Link to="/about" onClick={hideSidebar}><p className="text-6xl font-black">Contact</p></Link></div>
                            <div>
                                <a href="https://drive.google.com/file/d/13w5sxr0ZHHSkrmSAbdexVajGsF05_Owf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <p className="text-6xl font-black">Resume</p>
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </nav>
    );
}
