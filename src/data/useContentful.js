import { createClient } from "contentful";
import { useCallback } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const useContentful = () => {
    const client = createClient({
        space: "cx0biow617xg",
        accessToken: "_MOMDybXzCSEkl-dPpFw6bDEZ7HY0z3cZOADyR9ZqMc"
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
            console.log("Error fetching data:", error);
        }
    }, []); // Empty dependency array ensures getAuthors is memoized and doesn't change on every render

    return { getAuthors };
};

export default useContentful;
