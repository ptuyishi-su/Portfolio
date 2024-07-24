import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component";
import useContentful from "../../../data/useContentful";

export default function Work(projects) {
    const [authors, setAuthors] = useState([]);
    const { getAuthors } = useContentful();

    useEffect(() => {
        getAuthors().then((response) => response && setAuthors(response));
    }, [getAuthors]);
    return (
        <section id="workSection" className="work">
            <div className="">
                <h1>Work</h1>
            </div>
            <div className=" grid-rows-1 lg:grid grid-cols-2 ">
                {authors.map((author, index)=>(
                    <div key={index}>
                        <Link to={`/work/${author.slug}`} >
                        <div className=''>
                            <LazyLoadImage
                                alt="work and project thumnail"
                                src={author.thumbnail ? author.thumbnail.url : ''} 
                            />
                        </div>
                        </Link>
                    </div>
                ))}
            </div>

        </section>
    )
}