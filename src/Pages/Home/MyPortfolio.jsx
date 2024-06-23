import useContentful from "../../data/useContentful";
import { useEffect, useState } from "react";

export default function MyPortfolio({ projects }) {
    const [authors, setAuthors] = useState([]);
    const { getAuthors } = useContentful();

    useEffect(() => {
        getAuthors().then((response) => response && setAuthors(response));
    }, [getAuthors]);

    return (
        <section className="portfolio--section" id="myPortfolio">
            <div className="font-extrabold">
                <h1 className="text-white">Recent Work &gt;</h1>
                {authors.map((author, index) => (
                    <div key={index}>
                        {author.thumbnail && <img src={author.thumbnail} alt={author.title} />}
                        <h2>{author.title}</h2>
                        <p>{author.description}</p>
                        {/* Add more fields as needed */}
                    </div>
                ))}
            </div>
        </section>
    );
}
