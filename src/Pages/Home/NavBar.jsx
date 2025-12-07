import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LogoImage from '../../data/images/Logo.svg';
import Menu from '../../data/images/circle-Menu.svg';
import MenuClose from '../../data/images/circle-menu-Close.svg';

export default function NavBar() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
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

    const MenuLink = ({ item, isMobile = false, onClick }) => (
        <div className={`overflow-hidden ${isMobile ? 'h-auto' : 'h-6'}`}>
            <motion.div
                whileHover={{ y: isMobile ? 0 : -24 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col"
            >
                {item.type === "anchor" ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" onClick={isMobile ? onClick : undefined}
                       className={isMobile ? "text-yellow-300 text-4xl font-bold" : ""}>
                        {isMobile ? item.text : (<><p>{item.text}</p><p className="text-yellow-300">{item.text}</p></>)}
                    </a>
                ) : (
                    <Link to={item.path} onClick={isMobile ? onClick : undefined}
                          className={isMobile ? "text-yellow-300 text-4xl font-bold" : ""}>
                        {isMobile ? item.text : (<><p>{item.text}</p><p className="text-yellow-300">{item.text}</p></>)}
                    </Link>
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
                <div className="flex justify-between py-2 sm:px-5 rounded-lg items-center sm:flex-grow sm:border-2 border-black">
                    <Link to="/Home">
                        <img src={LogoImage} alt="Pharmacy Logo" className="object-contain h-8 w-auto" />
                    </Link>
                    <div className="space-x-7 hidden sm:flex">
                        {menuItems.map((item, index) => <MenuLink key={index} item={item} />)}
                    </div>
                </div>
                <button className="bg-black border-2 border-black py-[12px] px-5 rounded-lg items-center hidden sm:flex">
                    <a href="https://www.linkedin.com/in/patricktuyishime/" target="_blank" rel="noopener noreferrer" className="block">
                        <p className="text-white m-0 pb-0">LinkedIn</p>
                    </a>
                </button>
                <div className="flex sm:hidden">
                    <img onClick={toggleSidebar} src={Menu} alt="Menu" className={`menu ${isSidebarVisible ? 'hidden' : 'flex'}`} />
                </div>
                
                <AnimatePresence>
                    {isSidebarVisible && (
                        <motion.div 
                            className="fixed top-0 left-0 w-full h-screen bg-white z-[999] flex flex-col items-center justify-center gap-8"
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 200 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img onClick={hideSidebar} src={MenuClose} alt="Close Menu" className="absolute top-8 right-8 h-10" />
                            {menuItems.map((item, index) => (
                                <MenuLink key={index} item={item} isMobile={true} onClick={hideSidebar} />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </nav>
    );
}
