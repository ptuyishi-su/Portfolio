import useContentful from "../../data/useContentful";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function MyPortfolio({ projects }) {
    const [authors, setAuthors] = useState([]);
    const { getAuthors } = useContentful();

    useEffect(() => {
        getAuthors().then((response) => response && setAuthors(response));
    }, [getAuthors]);
    

    return (
        <section class=" overflow-visible" id="myPortfolio">
            <h1 class=" text-white tracking-wider pb-5 ">Recent Work&gt;</h1>
            <div class="flex-row-reverse  lg:flex gap-5 pb-10 ">
                {authors.map((author, index) => (
                    <div key={index} class=" bg-neutral-900 rounded-t-3xl w-full pb-5 rounded-3xl">
                        <a href={author.slug} className=" hover:cursor-grab">
                        <div className=" pb-5">
                            {author.thumbnail && <img src={author.thumbnail} alt={author.title} className="rounded-t-3xl "/>}
                        </div>
                        <div class="px-8 ">
                            <div className="flex items-center justify-between pb-5">
                                <div>
                                    <p class=" text-lg">{author.title}</p>
                                </div>
                                <div className="">
                                    <div className=" gap-5 flex items-center">
                                        <p className="border-[1px] py-2 px-2 rounded-full  bg-black">
                                            {author.role[0]}
                                        </p>
                                        <p className="border-[1px] py-2 px-2 rounded-full bg-black">
                                            {author.role[1]}
                                        </p>
                                    </div>
                                </div>     
                            </div>                       
                            <p>{author.description}</p>
                            {/* Add more fields as needed */}
                        </div>
                        </a>
                      
                    </div>
                ))}
            </div>
        </section>
    );
}
