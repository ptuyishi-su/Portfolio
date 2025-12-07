import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useContentful from "../../data/useContentful";
import { useLocation } from 'react-router-dom';
import Cursor from './cursor';

export let renderMedia = (media, altText = "Project image") => {
    if (!media) return null;
    const { url, mimeType } = media;
    if (mimeType.startsWith('image/')) {
        return <img src={url} alt={altText} className="rounded-t-3xl" loading='lazy'/>;
    } else if (mimeType.startsWith('video/')) {
        return (
            <video controls autoPlay className="rounded-t-3xl" aria-label={altText}>
                <source src={url} type={mimeType} />
                Your browser does not support the video tag.
            </video>
        );
    }
    return null;
};

export default function MyPortfolio({ projects }) {
    const [authors, setAuthors] = useState([]);
    const [activeTab, setActiveTab] = useState('Data');
    const { getAuthors } = useContentful();
    const location = useLocation();

    useEffect(() => {
        getAuthors().then((response) => response && setAuthors(response));
    }, [getAuthors]);

    const navItems = ['Data', 'UX/UI', 'Passion'];

    return (
        <section className="overflow-visible relative cursor-default" id="MyPortfolio">
            {/* Render the custom cursor component */}
            <Cursor />
            {/* Centered Navigation Buttons */}
            <div className="flex justify-center items-center gap-8 pt-10 pb-5">
                {navItems.map((item) => (
                    <button
                        key={item}
                        onClick={() => setActiveTab(item)}
                        className={`relative font-semibold text-base pb-2 transition-colors ${
                            activeTab === item 
                                ? 'text-black' 
                                : 'text-black'
                        }`}
                        style={{
                            borderBottom: activeTab === item ? '2px solid #2563eb' : '2px solid transparent'
                        }}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className="block gap-10 sm:flex sm:gap-5 pb-10 ">
                {authors.slice(0,3).map((author , index) => (
                    <div key={index} className="bg-gray-50 border border-gray-200 rounded-t-3xl w-full pb-5 rounded-3xl mb-5">
                        <Link to={`/work/${author.slug}`} className="">
                            <div className="object-contain pb-5">
                                {renderMedia(author.thumbnail, `${author.title} project thumbnail`)}
                            </div>
                            <div className="px-8">
                                <div className="flex items-center justify-between pb-5">
                                    <div>
                                        <p className="project-title">{author.title}</p>
                                    </div>
                                    <div>
                                        <div className="gap-5 flex items-center">
                                            {author.role.map((role, i) => (
                                                <p key={i} className="border-[1px] text-caption py-2 px-2 rounded-full bg-gray-200 text-black border-black">
                                                    {role}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className='body-text'>{author.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
            </div>
        </section>
    );
}
