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
            <h1 class=" text-white tracking-wider ">Recent Work&gt;</h1>
            <div class="flex-row-reverse  lg:flex gap-5 pb-10">
                {authors.map((author, index) => (
                    <div key={index} class=" bg-neutral-900 rounded-t-3xl">
                        {author.thumbnail && <img src={author.thumbnail} alt={author.title} />}
                        <div class="px-8">
                            <p class=" text-lg">{author.title}</p>
                            <p>{author.description}</p>
                            {/* Add more fields as needed */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
