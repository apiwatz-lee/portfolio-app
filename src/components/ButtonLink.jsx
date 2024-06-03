import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ path, text }) => {
  return (
    <>
      <Link to={path}>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          className='border font-medium p-3 rounded-lg duration-500 hover:bg-gray-900 hover:text-white animate-bounce'
        >
          {text}
        </button>
      </Link>
    </>
  );
};

export default ButtonLink;
