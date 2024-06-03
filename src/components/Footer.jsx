import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { socialMedia } from '../data/SocialMedia';
import { useContext } from 'react';
import { AppContext } from '../App';

const Footer = () => {
  const { darkTheme, primaryDarkTheme } = useContext(AppContext);

  const socials = socialMedia.map((item) => {
    return (
      <Link to={item.url} target='_blank' key={item.id}>
        {item.icon}
      </Link>
    );
  });

  return (
    <footer
      className={`flex flex-col items-center justify-center lg:justify-around gap-10 h-52 bg-mountain bg-no-repeat lg:gap-5 lg:flex-row lg:h-36 ${
        darkTheme ? `bg-none ${primaryDarkTheme}` : null
      }`}
    >
      <section className='flex justify-center items-center gap-2 w-72'>
        <AiOutlineMail />
        <p>apiwatz.lee@gmail.com</p>
      </section>
      <section className='w-72 flex justify-center items-center gap-2'>
        <span> &copy;</span>
        <p>Copyright 2023 | Apiwat Lee</p>
      </section>
      <section className='flex justify-center items-center text-2xl gap-5 w-72'>
        {socials}
      </section>
    </footer>
  );
};

export default Footer;
