// src/pages/[slug].jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import useContentful from '../../data/useContentful';
import { useEffect, useState } from 'react';
import {renderMedia} from './MyPortfolio';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const ProjectPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const { getAuthors } = useContentful();

  useEffect(() => {
    getAuthors().then((projects) => {
      const project = projects.find((project) => project.slug === slug);
      setProject(project);
    });
  }, [slug, getAuthors]);

  if (!project) return <div>Loading...</div>;

  
  
  return (
    <div className=' pt-10'>
      
      <div className="header block sm:flex justify-between">
        <div className='mainHeader pb-10 sm:pb-0 block max-w-[589px]'>
          <h1 className='project-title'>{project.title}</h1>
          <p className='body-text py-5 text-secondary'>{project.headline}</p>
          <div className='projectLinks flex gap-5'>
            <button className="group relative inline-flex border-[1px] h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500"><div className="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6"><div className="absolute translate-x-0 opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path></svg></div>            <a href={project.links[1]} target="_blank" rel="noopener noreferrer" className=' pl-6'>Design File</a>
<div className="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></div></div></button>
            <button className="group relative h-12 border-[1px] overflow-hidden rounded-md bg-black px-6 text-white transition hover:text-gray-300">
            <a href={project.links[0]} target="_blank" rel="noopener noreferrer">Live Site</a>

  <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
    <div className="relative h-full w-8 bg-white/30"></div>
  </div>
</button>
          </div>
        </div>
        <div className='sideHeader max-w-[1142px]'>
          <div className='roles flex gap-20 items-center'>
            <span>Role</span>
            <div className=' flex gap-5 text-tertiary'>
              {project.role.map((role, index) => (
                <span key={index} className='borderContainer' >{role}</span>
              ))}
            </div>
          </div>
          <div className='process flex gap-14 items-baseline py-5'>
            <span>Process</span>
            <div className=' flex gap-20 max-w-[392px] text-tertiary	'>
              {project.process}
            </div>
          </div>
          <div className='tools flex gap-20 items-center'>
            <span>Tools</span>
            <div className=' flex gap-20 text-tertiary'>
              {project.tool}
            </div>
          </div>

        </div>
      </div>
      <div className='Banner w-full pt-10'>
          {renderMedia(project.banner, `${project.title} project banner`)}

      </div>
      <div className='methordRich'>
        {project.methord}
      </div>
      <style jsx>
  {`.methordRich {
      display: grid;
      gap: 4rem;
      grid-auto-rows: min-content;
      grid-template-columns: 12fr; /* Single column layout on small devices */
      grid-template-rows: auto;
      height: min-content;
      justify-content: center;
      overflow: hidden;
      padding: 40px 0px 0px;
      position: relative;
    }
    

    .methordRich ol {
      font-size: small;
      list-style: circle;
      color: black; /* Changes both text and bullet color */
    }


    @media (min-width: 640px) {
      /* Desktop: Two column layout */
      .methordRich {
        grid-template-columns: repeat(2, minmax(200px, 1fr));
      }
    }

    .methordRich h3 {
     
    }

    .methordRich img {
      width: 100%;
    }

   

    .methordRich p {
      font-size: 16px;
    }

    .methordRich video {
      grid-column: 1 / -1;      
      padding: 0 9vw;
    }
  
    @media (max-width: 640px) {
      .methordRich video {
        max-width: 100%; /* Set max width to 100% for small screens */
        padding: 0;      /* Remove padding for small screens */
      
      
      }
    }`}
</style>

    </div>
  );
};


export default ProjectPage;
