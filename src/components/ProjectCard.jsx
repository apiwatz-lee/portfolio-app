import React from 'react';
import { projects } from '../data/Projects';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../App';

const ProjectCard = () => {
  const { darkTheme, secondaryDarkTheme } = useContext(AppContext);

  return (
    <>
      {projects.map((item) => {
        return item.id % 2 === 0 ? (
          <section
            key={item.id}
            className='w-full flex justify-center items-center px-5'
          >
            <div
              className={`border flex flex-col-reverse w-full h-auto rounded-xl shadow-lg p-10 gap-10 lg:flex-row lg:w-[1100px] mx-10 ${
                darkTheme ? `${secondaryDarkTheme} border-none` : null
              }`}
            >
              <div className='flex flex-col gap-5 justify-center items-center lg:justify-evenly lg:text-center lg:w-[1000px]'>
                <h1 className='font-bold text-md lg:text-2xl text-center'>
                  {item.name}
                </h1>
                <p
                  className={`text-sm text-start text-gray-500 ${
                    darkTheme ? 'text-gray-400' : null
                  }`}
                >
                  {item.description}
                </p>
                <div className='flex h-42 lg:h-auto w-92 flex-wrap items-center justify-center gap-2 lg:gap-5'>
                  {item.stack.map((item, index) => {
                    return (
                      <p
                        className={`h-8 p-3 text-sm lg:text-base flex items-center rounded-full bg-gray-300 ${
                          darkTheme ? 'bg-gray-700' : null
                        }`}
                        key={index}
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>

              <Link
                to={item.url}
                target='_blank'
                className='text-center lg:w-[1300px]'
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className='rounded-xl shadow-lg object-cover hover:scale-105 transition duration-500 cursor-pointer'
                />
              </Link>
            </div>
          </section>
        ) : (
          <section
            key={item.id}
            className='w-full flex justify-center items-center px-5'
          >
            <div
              className={`border flex flex-col w-full h-auto rounded-xl shadow-lg p-10 gap-10 lg:flex-row lg:w-[1100px] mx-10 ${
                darkTheme ? `${secondaryDarkTheme} border-none` : null
              }`}
            >
              <Link
                to={item.url}
                target='_blank'
                className='text-center lg:w-[1300px]'
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className='rounded-xl shadow-lg object-cover hover:scale-105 transition duration-500 cursor-pointer'
                />
              </Link>

              <div className='flex flex-col gap-5 justify-center items-center lg:justify-evenly lg:text-center lg:w-[1000px]'>
                <h1 className='font-bold text-md lg:text-2xl text-center'>
                  {item.name}
                </h1>
                <p
                  className={`text-sm text-start text-gray-500 ${
                    darkTheme ? 'text-gray-400' : null
                  }`}
                >
                  {item.description}
                </p>
                <div className='flex h-42 lg:h-auto w-92 flex-wrap items-center justify-center gap-2 lg:gap-5'>
                  {item.stack.map((item, index) => {
                    return (
                      <p
                        className={`h-8 p-2 text-sm lg:text-base flex items-center rounded-full bg-gray-300 ${
                          darkTheme ? 'bg-gray-700' : null
                        }`}
                        key={index}
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ProjectCard;
