import { createClient } from "contentful";
import { useCallback } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const useContentful = () => {
    // Fallback to hardcoded values if env vars aren't loaded (for development)
    // TODO: Remove fallback values after confirming env vars work and restarting dev server
    const space = process.env.REACT_APP_CONTENTFUL_SPACE_ID || "cx0biow617xg";
    const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || "_MOMDybXzCSEkl-dPpFw6bDEZ7HY0z3cZOADyR9ZqMc";

    // Ensure values are strings and not empty
    const spaceId = String(space || "cx0biow617xg").trim();
    const token = String(accessToken || "_MOMDybXzCSEkl-dPpFw6bDEZ7HY0z3cZOADyR9ZqMc").trim();

    if (!spaceId || !token) {
        console.error("Contentful credentials are missing. Please check your .env file.");
        throw new Error("Contentful credentials are missing");
    }

    const client = createClient({
        space: spaceId,
        accessToken: token
    });

      const renderOptions = {
        renderNode: {
          'embedded-asset-block': (node) => {
            const { file, title } = node.data.target.fields;
            const mimeType = file.contentType;
      
            if (mimeType.startsWith('image/')) {
              return (
                <img 
                  src={`https:${file.url}`} 
                  alt={title} 
                  style={{ maxWidth: '100vw' }} 
                />
              );
            }
      
            if (mimeType.startsWith('video/')) {
              return (
                <video  
                  autoPlay
                  loop
                  muted
                >
                  <source src={`https:${file.url}`} />
                  Your browser does not support the video tag.
                </video>
              );
            }
            // Handle other file types (if needed)
            return null;
          }
        }
      };
      
    const getAuthors = useCallback(async () => {
        try {
            let entries = await client.getEntries({
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
                    headline: fields.headline,
                    methord: documentToReactComponents(fields.methord, renderOptions)
                };
            });

            return sanitizedEntries;
        } catch (error) {
            console.error("Error fetching data from Contentful:", error);
            return [];
        }
    }, []); // Empty dependency array ensures getAuthors is memoized and doesn't change on every render

    return { getAuthors };
};

export default useContentful;
