import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useContentful from "../../data/useContentful";
import { useLocation } from 'react-router-dom';
import Cursor from './cursor';

export let renderMedia = (media) => {
    if (!media) return null;
    const { url, mimeType } = media;
    if (mimeType.startsWith('image/')) {
        return <img src={url} alt="" className="rounded-t-3xl" loading='lazy'/>;
    } else if (mimeType.startsWith('video/')) {
        return (
            <video controls autoPlay className="rounded-t-3xl">
                <source src={url} type={mimeType} />
                Your browser does not support the video tag.
            </video>
        );
    }
    return null;
};

export default function MyPortfolio({ projects }) {
    const [authors, setAuthors] = useState([]);
    const { getAuthors } = useContentful();
    const location = useLocation();

    useEffect(() => {
        getAuthors().then((response) => response && setAuthors(response));
    }, [getAuthors]);

    return (
        <section className="overflow-visible relative cursor-default" id="MyPortfolio">
            {/* Render the custom cursor component */}
            <Cursor />
            <Link to={`/work`} className=' '>
                <h2 className="text-white tracking-wider  pb-5 pt-10">Recent Work&gt;</h2>
            </Link>
            <div className="block sm:gap-10 lg:flex lg:gap-5 pb-10 ">
                {authors.slice(0,3).map((author , index) => (
                    <div key={index} className="bg-neutral-900 rounded-t-3xl w-full pb-5 rounded-3xl mb-5">
                        <Link to={`/work/${author.slug}`} className="">
                            <div className="object-contain pb-5">
                                {renderMedia(author.thumbnail)}
                            </div>
                            <div className="px-8">
                                <div className="flex items-center justify-between pb-5">
                                    <div>
                                        <p className="bold text-xl">{author.title}</p>
                                    </div>
                                    <div>
                                        <div className="gap-5 flex items-center">
                                            {author.role.map((role, i) => (
                                                <p key={i} className="border-[1px] text-xs py-2 px-2 rounded-full bg-black">
                                                    {role}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className='text-lg'>{author.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
