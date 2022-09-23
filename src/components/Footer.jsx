import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  const currentYear = new Date();

  return (
    <footer className='bg-gray-200 text-center lg:text-left'>
      <div className='text-gray-700 text-center p-4 bg-[#1E1E1E] flex justify-center flex-col'>
        <div className='flex justify-center'>
          <Link to='/'>
            <img className='h-20' src='/img/logo.svg' alt='logo'></img>
          </Link>
        </div>
        <div className='mt-8'>
          <ul className='halant text-xl flex flex-col justify-center md:flex-row'>
            <li className='px-10'>
              <Link
                to='/'
                className={`${
                  props.title === 'Home'
                    ? 'text-white'
                    : 'text-red-500 hover:text-white'
                }`}
              >
                HOME
              </Link>
            </li>
            <li className='px-10'>
              <Link
                to='/about'
                className={`${
                  props.title === 'About'
                    ? 'text-white'
                    : 'text-red-500 hover:text-white'
                }`}
              >
                ABOUT
              </Link>
            </li>
            <li className='px-10'>
              <Link
                to='/games'
                className={`${
                  props.title === 'Games'
                    ? 'text-white'
                    : 'text-red-500 hover:text-white'
                }`}
              >
                GAMES
              </Link>
            </li>
            <li className='px-10'>
              <Link
                to='/news'
                className={`${
                  props.title === 'News'
                    ? 'text-white'
                    : 'text-red-500 hover:text-white'
                }`}
              >
                NEWS
              </Link>
            </li>
          </ul>
        </div>
        <p className='halant mt-7'>
          Copyright &copy; {currentYear.getFullYear()} KodeGo WD-15
        </p>
        <p className='halant text-sm mt-1'>
          Jullie Morales &amp; Jeff Mikhail Mangrobang
        </p>
      </div>
    </footer>
  );
};

export default Footer;
