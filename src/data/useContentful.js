import { createClient } from "contentful";

const useContentful = () => {
    const client = createClient({
        space: "cx0biow617xg",
        accessToken: "_MOMDybXzCSEkl-dPpFw6bDEZ7HY0z3cZOADyR9ZqMc"

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
                    thumbnail: fields.thumbnail ? `https:${fields.thumbnail.fields.file.url}` : null,
                    banner: fields.banner ? `https:${fields.banner.fields.file.url}` : null
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
