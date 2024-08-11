import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component";
import useContentful from "../../../data/useContentful";
import { motion } from "framer-motion";


export default function Work(projects) {
    const [authors, setAuthors] = useState([]);
    const { getAuthors } = useContentful();

    useEffect(() => {
        getAuthors().then((response) => response && setAuthors(response));
    }, [getAuthors]);
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
            id="workSection" 
            className="work"
            variants={frameVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div 
                className="pt-5 pb-3"
                variants={itemVariants}
            >
                <h2>Recent Projects</h2>
            </motion.div>
            <motion.div className="flex flex-wrap gap-7" variants={itemVariants}>
                {authors.map((author, index) => (
                    <motion.div  key={index} className="w-full sm:w-[calc(50%-1rem)] hover:rounded-2xl hover:-translate-y-5 transition duration-500 ease-in-out">
                        <Link to={`/work/${author.slug}`}>
                            <div className="relative h-0 pb-[56.25%] overflow-hidden">
                                <LazyLoadImage
                                    className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
                                    alt="work and project thumbnail"
                                    src={author.banner ? author.banner.url : ''}
                                />
                            </div>
                            <div className="flex justify-between pt-3 pb-10">
                                <div>
                                    <p className=" font-semibold">{author.title}</p>
                                </div>
                                <div className="flex gap-3 justify-between">
                                    {author.role.map((role, i) => (
                                        <p key={i} className="border-[1px]  text-xs py-2 px-2 rounded-full bg-black">
                                            {role}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}