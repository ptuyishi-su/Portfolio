import { Link } from "react-router-dom";
import heroImage from "../../data/images/Rectangle.png";


export default function HeroSection() {
    const getCurrentDate = () => {
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };
    return (
        <section className="hero" id="Hero">
            <div className=" ">
                <div className="font-extrabold">
                    {/* <h1 class="bg-custom-gradient text-white">Web Developer</h1> */}
                    <h1 className=" text-white tracking-wider ">Web Developer</h1>
                </div>
                <div className="flex justify-between gap-10 lg:pr-[400px] pb-4 pt-4">
                    <div className="max-w-[400px]">
                        <p>Hey there, my name is Patrick, a Front~End Developer and Web Designer 👋 I’m passionate about building solutions for social good with a focus on thoughtful user experience. Currently studying Information Technology at Syracuse University </p>
                    </div>
                    <div className=" hidden max-w-[400px] md:flex"> 
                        <p>My journey in web development has allowed me to wear multiple hats - from coding the front-end magic to designing the UI solutions. I'm looking forward to creating experiences that simplify, uplift, and nurture human connection.</p>
                    </div>
                </div>
                <div className="pb-4">
                    <img src={heroImage} loading="lazy" alt="Portrait image of Patrick Tuyishime" className="rounded-r-full lg:h-[25vw] "/>
                </div>
                <div className="flex gap-4">
                    <div className="pulse-svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <circle cx="8" cy="8.5" r="8" fill="#45F619" />
                            <mask id="pulse-mask">
                                <rect x="0" y="0" width="16" height="17" fill="white" />
                                <circle cx="8" cy="8.5" r="8" fill="black">
                                    <animate attributeName="r" from="0" to="8" dur="1.5s" repeatCount="indefinite" />
                                </circle>
                            </mask>
                            <circle cx="8" cy="8.5" r="8" fill="url(#paint0_radial_163_72)" mask="url(#pulse-mask)" />
                            <defs>
                                <radialGradient id="paint0_radial_163_72" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8 8.5) rotate(90) scale(8)">
                                    <stop stopColor="#191b19"/>
                                    <stop offset="1" stopColor="#45F619"/>
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className=" text-gray-400"><p>Available for work {getCurrentDate()}</p></div>
                </div>
            </div>
        </section>
    );
}