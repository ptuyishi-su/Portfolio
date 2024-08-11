import { Link } from "react-router-dom";
import heroImage from "../../data/images/Rectangle.png";
import { motion } from "framer-motion";

export default function HeroSection() {
    const getCurrentDate = () => {
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    const frameVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 2,
                staggerChildren: 0.5,
                ease: [0.02, 0.6, 0.01, 0.91]
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 200
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                ease: [0.02, 0.6, 0.01, 0.91]
            }
        }
    };

    return (
        <motion.section
            className="hero pt-36 sm:pt-0"
            id="Hero"
            variants={frameVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="hero" variants={frameVariants}>
                <motion.div className="font-extrabold relative" variants={itemVariants}>
                    <h1 className="text-white tracking-wide uppercase">Web Developer</h1>
                </motion.div>
                <motion.div
                    className="flex justify-between gap-10 lg:pr-[400px] pb-4 pt-4"
                    variants={itemVariants}
                >
                    <motion.div className="max-w-[400px]" variants={itemVariants}>
                        <p>
                            Hey there, my name is Patrick, a Front-End Developer and Web Designer 👋 I’m passionate
                            about building solutions for social good with a focus on thoughtful user experience.
                            Currently studying Information Technology at Syracuse University.
                        </p>
                    </motion.div>
                    <motion.div
                        className="hidden max-w-[400px] md:flex"
                        variants={itemVariants}
                    >
                        <p>
                            My journey in web development has allowed me to wear multiple hats - from coding the
                            front-end magic to designing the UI solutions. I'm looking forward to creating
                            experiences that simplify, uplift, and nurture human connection.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div className="pb-4" variants={itemVariants}>
                    <img
                        src={heroImage}
                        loading="lazy"
                        alt="Portrait image of Patrick Tuyishime"
                        className="rounded-r-full lg:h-[25vw]"
                    />
                </motion.div>
                <motion.div className="flex gap-4" variants={itemVariants}>
                    <div className="pulse-svg-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                        >
                            <circle cx="8" cy="8.5" r="8" fill="#45F619" />
                            <mask id="pulse-mask">
                                <rect x="0" y="0" width="16" height="17" fill="white" />
                                <circle cx="8" cy="8.5" r="8" fill="black">
                                    <animate
                                        attributeName="r"
                                        from="0"
                                        to="8"
                                        dur="1.5s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            </mask>
                            <circle
                                cx="8"
                                cy="8.5"
                                r="8"
                                fill="url(#paint0_radial_163_72)"
                                mask="url(#pulse-mask)"
                            />
                            <defs>
                                <radialGradient
                                    id="paint0_radial_163_72"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(8 8.5) rotate(90) scale(8)"
                                >
                                    <stop stopColor="#191919" />
                                    <stop offset="1" stopColor="#45F619" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="text-gray-400">
                        <p>Available for work {getCurrentDate()}</p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
