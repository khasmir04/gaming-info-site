import { useState } from 'react';
import { Link } from 'react-router-dom';

const NaviBar = (props) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className='w-full bg-[#1E1E1E] shadow'>
      <div className='justify-between px-4 md:items-center md:flex md:px-16'>
        <div>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            <Link to='/'>
              <img
                className='h-16 md:h-22'
                src='/img/logo.svg'
                alt='logo'
              ></img>
            </Link>
            <div className='md:hidden'>
              <button
                className='p-2 text-gray-700 rounded-md outline-none focus:border-red-500 focus:border'
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className='halant text-xl items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              <li>
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
              <li>
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
              <li>
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
              <li>
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
        </div>
      </div>
    </nav>
  );
};

export default NaviBar;
