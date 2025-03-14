import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LogoImage from '../../data/images/Frame.svg';
import Menu from '../../data/images/circle-Menu.svg';
import MenuClose from '../../data/images/circle-menu-Close.svg';

export default function NavBar() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const showSidebar = () => setIsSidebarVisible(true);
    const hideSidebar = () => setIsSidebarVisible(false);

    const menuItems = [
        { path: "/work", text: "Work" },
        { path: "/about", text: "Contact" },
        { 
            type: "anchor",
            url: "https://drive.google.com/file/d/1xNCkOI0AdPOqub2vmUdbJ5ltfIPWifS1/view?usp=sharing",
            text: "Resume"
        }
    ];

    const MenuLink = ({ item }) => (
        <div className="overflow-hidden h-6">
            <motion.div
                whileHover={{ y: -24 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col"
            >
                {item.type === "anchor" ? (
                    <>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <p>{item.text}</p>
                        </a>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <p className="text-yellow-300">{item.text}</p>
                        </a>
                    </>
                ) : (
                    <>
                        <Link to={item.path}>
                            <p>{item.text}</p>
                        </Link>
                        <Link to={item.path}>
                            <p className="text-yellow-300">{item.text}</p>
                        </Link>
                    </>
                )}
            </motion.div>
        </div>
    );

    return (
        <nav>
            <motion.div 
                className="flex justify-between gap-5 items-center pb-5"
                initial={{ opacity: 0, y: -70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
                <div className="flex justify-between py-2 lg:px-5 rounded-lg items-center lg:flex-grow lg:border-2">
                    <div>
                        <Link to="/Home">
                            <img src={LogoImage} alt="Logo" className="object-contain h-full" />
                        </Link>
                    </div>
                    <div className="space-x-7 hidden lg:flex">
                        {menuItems.map((item, index) => (
                            <div key={index}>
                                <MenuLink item={item} />
                            </div>
                        ))}
                    </div>
                </div>
                <button className="bg-white border-2 py-5 px-5 rounded-lg items-center hidden lg:flex">
                    <a href="https://www.linkedin.com/in/patricktuyishime/" target="_blank" rel="noopener noreferrer">
                        <p className="text-black">LinkedIn</p>
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
                            transition={{ duration: 0.5 }}
                        >
                            <img onClick={hideSidebar} src={MenuClose} alt="Close Menu" className="closeMenu h-10 absolute top-[30px] right-[30px]" />
                            {menuItems.map((item, index) => (
                                <div key={index}>
                                    {item.type === "anchor" ? (
                                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                                            <p className="text-6xl font-black text-black">{item.text}</p>
                                        </a>
                                    ) : (
                                        <Link to={item.path} onClick={hideSidebar}>
                                            <p className="text-6xl font-black text-black">{item.text}</p>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </nav>
    );
}