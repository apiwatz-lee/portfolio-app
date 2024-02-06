import React from 'react';
import ButtonLink from './ButtonLink';
import Skills from './Skills';
import ProjectCard from './ProjectCard';

const ProjectSection = () => {
  return (
    <main
      className={`font-montserrat flex flex-col justify-center items-center gap-10 mb-10 w-screen py-10`}
    >
      <h1 className='text-center font-bold text-4xl mt-5'>Projects</h1>
      <Skills />
      <ProjectCard />
      {/* <ButtonLink path='/resume' text='Consider my resume'/>  */}
    </main>
  );
};

export default ProjectSection;
