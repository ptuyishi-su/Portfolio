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
                const processAsset = (asset) => {
                    const url = `https:${asset.fields.file.url}`;
                    const mimeType = asset.fields.file.contentType;
                    return { url, mimeType };
                };

                return {
                    title: fields.title,
                    slug: fields.slug,
                    description: fields.description,
                    role: fields.role,
                    thumbnail: fields.thumbnail ? processAsset(fields.thumbnail) : null,
                    banner: fields.banner ? processAsset(fields.banner) : null,
                    tool: fields.tool,
                    links: fields.links,
                    process: fields.process,
                    headline: fields.headline
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
