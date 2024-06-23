import { createClient } from "contentful";

const useContentful = () => {
    const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE,
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN

    });

    const getAuthors = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "patrickProjects",
                select: "fields"
            });

            const sanitizedEntries = entries.items.map((item) => {
                const fields = item.fields;
                return {
                    title: fields.title,
                    slug: fields.slug,
                    description: fields.description,
                    role: fields.role,
                    thumbnail: fields.thumbnail ? `https:${fields.thumbnail.fields.file.url}` : null
                };
            });

            return sanitizedEntries;
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    return { getAuthors };
};

export default useContentful;
