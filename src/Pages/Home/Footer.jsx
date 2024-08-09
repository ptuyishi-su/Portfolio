import React from "react"
import { Link } from "react-router-dom"
import Arrow from "../../data/images/upArrow.svg"
import Email from "../../data/images/message.svg"
import Behance from "../../data/images/Behance.svg"
import Linkedin from "../../data/images/LinkedIn.svg"
import Github from "../../data/images/Github.svg"


export default function Footer() {
    return (
        <section className="flex justify-between border-t-2 pt-5 mt-10" id="footerSection">
            <div className="lg:flex gap-24 hidden"> 
                <li className="flex gap-2">
                    <Link to="/work"><p>Work</p></Link>
                    <img src={Arrow} alt="arrow pointing to link" className="h-fit" />
                </li>
                <li className="flex gap-2">
                    <Link to="/about"><p>Contact</p></Link>
                    <img src={Arrow} alt="arrow pointing to link" className="h-fit" />
                </li>
                <li className="flex gap-2">
                    <Link to="https://drive.google.com/file/d/1MxnkMychiTgD5AjzsQi0406iJNSlPRY0/view?usp=sharing"><p>Resume</p></Link>
                    <img src={Arrow} alt="arrow pointing to link" className="h-fit" />
                </li>
            </div>
            <div className="flex gap-20"> 
                <li className="flex gap-2">

                        <a href="mailto:ptuyishi@syr.edu">
                            <img src={Email} alt="arrow pointing to link" className="h-fit" />
                        </a>

                </li>
                <li className="flex gap-2">
                    <Link to="https://www.behance.net/patricktuyishi2" target="blank">
                        <img src={Behance} alt="arrow pointing to link" className="h-fit" />
                    </Link>
                </li>
                <li className="flex gap-2">
                    <Link to="https://www.linkedin.com/in/patricktuyishime/" target="blank">
                        <img src={Linkedin} alt="arrow pointing to link" className="h-fit" />
                    </Link>
                </li>
                <li className="flex gap-2">
                    <Link to="https://github.com/ptuyishi-su" target="blank">
                        <img src={Github} alt="arrow pointing to link" className="h-fit" />
                    </Link>
                </li>
            </div>
        </section>
    )
}