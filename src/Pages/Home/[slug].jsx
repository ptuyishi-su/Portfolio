// src/pages/[slug].jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import useContentful from '../../data/useContentful';
import { useEffect, useState } from 'react';
import {renderMedia} from './MyPortfolio';

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
      <div className="header block lg:flex justify-between">
        <div className='mainHeader pb-10 lg:pb-0 block max-w-[589px]'>
          <p className=' text-[36px] font-medium'>{project.title}</p>
          <p className=' py-5'>{project.headline}</p>
          <div className='projectLinks flex gap-5'>
            <button className='buttonSecondary'>
              <a href={project.links[0]} target='blank'>Live Site</a>
            </button>
            <button className='buttonSecondary'>
              <a href={project.links[1]} target='blank'>Design File</a>
            </button>
          </div>
        </div>
        <div className='sideHeader max-w-[1142px]'>
          <div className='roles flex gap-20 items-center'>
            <span>Role</span>
            <div className=' flex gap-5'>
              {project.role.map((role, index) => (
                <span key={index} className='borderContainer' >{role}</span>
              ))}
            </div>
          </div>
          <div className='process flex gap-14 items-baseline py-5'>
            <span>Process</span>
            <div className=' flex gap-20 max-w-[392px]'>
              {project.process}
            </div>
          </div>
          <div className='tools flex gap-20 items-center'>
            <span>Tools</span>
            <div className=' flex gap-20'>
              {project.tool}
            </div>
          </div>

        </div>
      </div>
      <div className='Banner w-full pt-10'>
          {renderMedia(project.banner)}
      </div>
    </div>
  );
};

export default ProjectPage;
