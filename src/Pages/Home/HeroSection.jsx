import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImage from "../../data/images/Rectangle.png";
import { motion, AnimatePresence } from "framer-motion";
import Cursor from "./cursor";

export default function HeroSection() {
    const getCurrentDate = () => {
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    const personalTitleRef = useRef(null);
    const curentDay = useRef(null);

    // Function to split text into individual divs
    const splitTextIntoDivs = (text) => {
        return text.split("").map((char, index) => (
            <h1
                key={index}
                style={{ display: "inline-block" }}
                className="letter "
            >
                {char === " " ? "\u00A0" : char}
            </h1>
        ));
   
    };
    const splitTextIntoSpans = (text) => {
        return text.split(" ").map((word, index) => (
            <div className="overflow-clip inline-block">
<p key={index} style={{ display: "inline-block" }} className="word text-lg ">
                {word}
                &nbsp;
            </p>
            </div>
            
        ));
    };
    useEffect(() => {
        const words = document.querySelectorAll(".word");
        
        // GSAP animation to fade up each word
        gsap.fromTo(
            words,
            { autoAlpha: 0, y: 20 }, // Initial state: invisible and moved down
            {
                delay:.5,
                autoAlpha: 1,
                y: 0,                  // Final state: visible and at original position
                stagger: 0,          // Delay between each word animation
                ease: "none",     // Smooth easing effect
                duration: 1,          // Duration of each word's animation
            }
        );
    }, []);

  useEffect(() => {
    const letters = document.querySelectorAll(".letter");
    
    // Animate the letters using GSAP, revealing one at a time
    gsap.fromTo(
        letters,
        { autoAlpha: 0, y: 110 },  // Starting state: hidden and below
        { 
          autoAlpha: 1, 
          y: 10,                 // Ending state: fully visible and aligned in line
          stagger: {
            each: 0.05,           // Time between each letter appearing
            from: "start",       // Start animation from the first letter
          },
          ease: "power3.inOut",
          duration: 2,
        }
    );


}, []);



    return (
        <section className="hero pt-36 sm:pt-0" id="Hero">
            <div className="hero">
                <div className="font-extrabold relative overflow-clip pb-2  p-1.25 sm:p-0 ">
                    {/* Dynamically render split text */}
                    <h1 ref={personalTitleRef} className="text-white tracking-wide uppercase " id="personalTitle">
                        {splitTextIntoDivs("Web Designer")}
                    </h1>
                </div>
                <div className="flex justify-between gap-14 lg:pr-[300px] pb-4 pt-4">
                <div className="max-w-[500px]">
    <p className="text-lg personalStatement">
        {splitTextIntoSpans("Hey there, my name is Patrick, a Front-End Developer and Web Designer 👋 I’m passionate about building solutions for social good with a focus on thoughtful user experience. Currently studying Information Technology at Syracuse University.")}
    </p>
</div>


<div className="hidden max-w-[500px] md:flex">
    <p className="text-lg personalStatement">
        {splitTextIntoSpans("My journey in web development has allowed me to wear multiple hats - from coding the front-end magic to designing the UI solutions. I'm looking forward to creating experiences that simplify, uplift, and nurture human connection.")}
    </p>
</div>
                </div>
                <motion.div 
                    initial={{ 
                        opacity: 0, 
                        scale: 0.95, 
                        clipPath: 'inset(0% 100% 0% 0%)'  // Starting at top left corner (image fully hidden)
                    }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1,
      duration: 3.25,
      ease: "power3.inOut",
                        clipPath: 'inset(0 0% 0% 0)'  // Revealing to bottom right
                    }}
                    transition={{
                        duration: 1.3,
                        delay: .8,
                    }}
                    className="pb-4">
                        <img
                            src={heroImage}
                            loading="lazy"
                            alt="Portrait image of Patrick Tuyishime"
                            className="rounded-r-full rounded-l-[350px] lg:h-[24vw] w-auto box-border bg-black transition duration-500"
                        />
                </motion.div>
                

                <div className="flex gap-4">
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
                    <div className="text-gray-400 overflow-clip m-0" ref={curentDay}>
                        <motion.p 
                         initial={{ 
                            opacity: 0,
                            y:90 
                        }}
                        animate={{ 
                            opacity: 1, 
                            y:0

                        }}
                        transition={{
                            duration: 1.3,
                            delay: 0,
                            ease: [0, 0.71, 0.2, 1.01]  // Smooth easing
                        }}>
                            Available for work {getCurrentDate()}
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}
