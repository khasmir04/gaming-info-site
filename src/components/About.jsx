import { Link } from 'react-router-dom'
import Footer from './Footer'
import NaviBar from './NaviBar'
import { useEffect } from 'react'
import Contact from './Contact'
import Aos from 'aos'

const About = () => {
  useEffect(() => {
    document.title = 'Game On | ABOUT'
    Aos.init()
  }, [])

  return (
    <div>
      <NaviBar title='About' />
      <section className='text-white body-font bg-[#291D24]'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-20'>
            <h1 className='text-5xl font-medium nunito mb-4 text-white tracking-widest'>
              OUR TEAM
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base nunito'>
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='1000'
            className='flex flex-wrap -m-4'
          >
            <div className='p-4 lg:w-1/2'>
              <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
                <img
                  alt='team'
                  className='flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4'
                  src='/img/jullie.jpg'
                />
                <div className='flex-grow sm:pl-8'>
                  <h2 className='title-font font-medium text-lg text-white nunito'>
                    Jullie Angeli S. Morales
                  </h2>
                  <h3 className='text-gray-500 mb-3 nunito'>
                    Aspiring Frontend Web Developer
                  </h3>
                  <p className='mb-4 font-thin'>
                    I am currently training as a Full-Stack Web Developer in
                    Kodego. I was a student of De La Salle
                    University-Dasmariñas. My technical skills include having
                    knowledge about HTML, CSS, and JavaScript. Furthermore, I
                    also possess the knowledge in the C Programming Language,
                    ReactJS, NodeJS, MongoDB, Bootstrap, Tailwind, and Figma. I
                    also have some basic knowledge when it comes into Database
                    Management, CISCO Networking, and Microsoft Office (MS Word,
                    PowerPoint, and Excel).
                  </p>
                  <span className='inline-flex'>
                    <a
                      href='https://www.facebook.com/moralesjullie/'
                      target='_blank'
                      rel='noreferrer'
                      className='text-gray-500'
                    >
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' />
                      </svg>
                    </a>
                    <Link className='ml-2 text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' />
                      </svg>
                    </Link>
                    <a
                      href='https://www.linkedin.com/in/moralesjullie/'
                      target='_blank'
                      rel='noreferrer'
                      className='ml-[10px] text-gray-500'
                    >
                      <svg
                        className='w-5 h-5 pb-[2px]'
                        viewBox='0 0 46 46'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                      >
                        <g clipPath='url(#clip0_149_526)'>
                          <path
                            d='M5.392 0.491943C2.268 0.491943 0 2.64694 0 5.61394C0 8.57994 2.223 10.7329 5.284 10.7329C6.872 10.7329 8.24 10.2179 9.241 9.24394C10.201 8.30894 10.73 7.01994 10.729 5.59094C10.659 2.58894 8.464 0.491943 5.392 0.491943ZM7.847 7.81094C7.227 8.41394 6.34 8.73294 5.284 8.73294C3.351 8.73294 2 7.45094 2 5.61394C2 3.74694 3.363 2.49194 5.392 2.49194C7.375 2.49194 8.685 3.72694 8.73 5.61494C8.729 6.47694 8.416 7.25594 7.847 7.81094Z'
                            fill='#6B7280'
                          />
                          <path
                            d='M0.959015 45.4669H9.94701V12.4219H0.959015V45.4669ZM2.95901 14.4219H7.94701V43.4659H2.95901V14.4219Z'
                            fill='#6B7280'
                          />
                          <path
                            d='M33.648 12.4219C29.48 12.4219 26.928 13.8609 25.45 15.2139L25.169 12.4219H15V45.4659H24.959V28.0989C24.959 27.3509 25.262 25.7979 25.452 25.3879C26.655 22.7969 28.278 22.7969 30.736 22.7969C33.567 22.7969 35.959 25.4519 35.959 28.5939V45.4679H45.959V26.7979C45.959 16.9199 39.577 12.4219 33.648 12.4219ZM43.959 43.4669H37.959V28.5929C37.959 24.3659 34.651 20.7959 30.736 20.7959C28.224 20.7959 25.378 20.7959 23.637 24.5459C23.278 25.3209 22.958 27.1779 22.958 28.0989V43.4669H17V14.4219H23.36L23.768 18.4659H25.407L25.7 17.9929C26.367 16.9189 28.476 14.4209 33.648 14.4209C38.614 14.4209 43.959 18.2929 43.959 26.7949V43.4669V43.4669Z'
                            fill='#6B7280'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_149_526'>
                            <rect width='45.959' height='45.959' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </span>
                  <div>
                    <a
                      href='https://www.lusso.ml/'
                      target='_blank'
                      rel='noreferrer'
                      className='text-gray-500'
                    >
                      <button className='nunito px-2 bg-[#6b7280] text-white text-xs rounded-full'>
                        Mini Project 1
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-4 lg:w-1/2'>
              <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
                <img
                  alt='team'
                  className='flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4'
                  src='/img/jeff.jpg'
                />
                <div className='flex-grow sm:pl-8'>
                  <h2 className='title-font font-medium text-lg text-white nunito'>
                    Jeff Mikhail C. Mangrobang
                  </h2>
                  <h3 className='text-gray-500 mb-3 nunito'>
                    Aspiring Full-Stack Web Developer
                  </h3>
                  <p className='mb-4 font-thin'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <span className='inline-flex'>
                    <a
                      href='https://www.facebook.com/nabajongjong'
                      target='_blank'
                      rel='noreferrer'
                      className='text-gray-500'
                    >
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' />
                      </svg>
                    </a>
                    <Link className='ml-2 text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' />
                      </svg>
                    </Link>
                    <a
                      href='https://www.linkedin.com/in/jeff-mikhail-mangrobang-ab9805216/'
                      target='_blank'
                      rel='noreferrer'
                      className='ml-[10px] text-gray-500'
                    >
                      <svg
                        className='w-5 h-5 pb-[2px]'
                        viewBox='0 0 46 46'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                      >
                        <g clipPath='url(#clip0_149_526)'>
                          <path
                            d='M5.392 0.491943C2.268 0.491943 0 2.64694 0 5.61394C0 8.57994 2.223 10.7329 5.284 10.7329C6.872 10.7329 8.24 10.2179 9.241 9.24394C10.201 8.30894 10.73 7.01994 10.729 5.59094C10.659 2.58894 8.464 0.491943 5.392 0.491943ZM7.847 7.81094C7.227 8.41394 6.34 8.73294 5.284 8.73294C3.351 8.73294 2 7.45094 2 5.61394C2 3.74694 3.363 2.49194 5.392 2.49194C7.375 2.49194 8.685 3.72694 8.73 5.61494C8.729 6.47694 8.416 7.25594 7.847 7.81094Z'
                            fill='#6B7280'
                          />
                          <path
                            d='M0.959015 45.4669H9.94701V12.4219H0.959015V45.4669ZM2.95901 14.4219H7.94701V43.4659H2.95901V14.4219Z'
                            fill='#6B7280'
                          />
                          <path
                            d='M33.648 12.4219C29.48 12.4219 26.928 13.8609 25.45 15.2139L25.169 12.4219H15V45.4659H24.959V28.0989C24.959 27.3509 25.262 25.7979 25.452 25.3879C26.655 22.7969 28.278 22.7969 30.736 22.7969C33.567 22.7969 35.959 25.4519 35.959 28.5939V45.4679H45.959V26.7979C45.959 16.9199 39.577 12.4219 33.648 12.4219ZM43.959 43.4669H37.959V28.5929C37.959 24.3659 34.651 20.7959 30.736 20.7959C28.224 20.7959 25.378 20.7959 23.637 24.5459C23.278 25.3209 22.958 27.1779 22.958 28.0989V43.4669H17V14.4219H23.36L23.768 18.4659H25.407L25.7 17.9929C26.367 16.9189 28.476 14.4209 33.648 14.4209C38.614 14.4209 43.959 18.2929 43.959 26.7949V43.4669V43.4669Z'
                            fill='#6B7280'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_149_526'>
                            <rect width='45.959' height='45.959' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </span>
                  <div>
                    <a
                      href='https://blue-dot.vercel.app/'
                      target='_blank'
                      rel='noreferrer'
                      className='text-gray-500'
                    >
                      <button className='nunito px-2 bg-[#6b7280] text-white text-xs rounded-full'>
                        Mini Project 1
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact data-aos='flip-left' data-aos-duration='1000' />
      </section>
      <Footer title='About' />
    </div>
  )
}

export default About
