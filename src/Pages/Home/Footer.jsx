import React from "react"
import { Link } from "react-router-dom"
import Arrow from "../../data/images/upArrow.svg"
import Email from "../../data/images/message.svg"
import Behance from "../../data/images/Behance.svg"
import Linkedin from "../../data/images/LinkedIn.svg"
import Github from "../../data/images/Github.svg"




export default function Footer() {
    return (
        <section className="flex justify-between" id="footerSection">
            <div class="lg:flex gap-24 hidden"> 
                <li class="flex gap-2">
                    <Link to="/work"><p>Work</p></Link>
                    <img src={Arrow} alt="arrow pointing to link" class="h-fit" />
                </li>
                <li class="flex gap-2">
                    <Link to="/about"><p>Contact</p></Link>
                    <img src={Arrow} alt="arrow pointing to link" class="h-fit" />
                </li>
                <li class="flex gap-2">
                    <Link to="/work"><p>Resume</p></Link>
                    <img src={Arrow} alt="arrow pointing to link" class="h-fit" />
                </li>
            </div>
            <div class="flex gap-20"> 
                <li class="flex gap-2">
                    <Link to="/work">
                        <img src={Email} alt="arrow pointing to link" class="h-fit" />
                    </Link>
                </li>
                <li class="flex gap-2">
                    <Link to="/work">
                        <img src={Behance} alt="arrow pointing to link" class="h-fit" />
                    </Link>
                </li>
                <li class="flex gap-2">
                    <Link to="/work">
                        <img src={Linkedin} alt="arrow pointing to link" class="h-fit" />
                    </Link>
                </li>
                <li class="flex gap-2">
                    <Link to="/work">
                        <img src={Github} alt="arrow pointing to link" class="h-fit" />
                    </Link>
                </li>
            </div>
        </section>
    )
}