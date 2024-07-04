// src/pages/[slug].jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import useContentful from '../../data/useContentful';
import { useEffect, useState } from 'react';

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
    <div>
      <div className="header flex justify-between">
      <span className=' max-w-[250px] siz'>{project.title}</span>
      <p>{project.description}</p>
      </div>
      <img src={project.thumbnail} alt={project.title} />
      <div>
        {project.role.map((role, index) => (
          <span key={index}>{role}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
