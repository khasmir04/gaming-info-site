import { getSingleGame } from '../service/api'
import { useState, useEffect } from 'react'
import Footer from './Footer'
import NaviBar from './NaviBar'
import { useParams } from 'react-router-dom'
import { SpinnerDotted } from 'spinners-react'
import CarouselSingle from './CarouselSingle'

const SinglePage = () => {
  const [game, setGame] = useState({
    id: 0,
    title: '',
    thumbnail: '',
    status: '',
    short_description: '',
    description: '',
    game_url: '',
    genre: '',
    platform: '',
    publisher: '',
    developer: '',
    release_date: '',
    freetogame_profile_url: '',
    minimum_system_requirements: {
      os: '',
      processor: '',
      memory: '',
      graphics: '',
      storage: '',
    },
    screenshots: [
      {
        id: 0,
        image: '',
      },
      {
        id: 0,
        image: '',
      },
      {
        id: 0,
        image: '',
      },
      {
        id: 0,
        image: '',
      },
    ],
  })
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()
  const {
    genre,
    platform,
    publisher,
    developer,
    release_date,
    description,
    screenshots,
    title,
    game_url,
    minimum_system_requirements: {
      os,
      processor,
      memory,
      graphics,
      storage,
    } = {},
  } = game

  useEffect(() => {
    const getGame = async () => {
      setIsLoading(true)
      setTimeout(async () => {
        const result = await getSingleGame(id)
        setGame(result.data)
        setIsLoading(false)
      }, 1000)
    }
    getGame()
  }, [id])

  return (
    <div className='bg-[#291D24]'>
      <NaviBar title='Games' />
      <section>
        {isLoading && (
          <div className='mx-auto'>
            <SpinnerDotted
              size='20%'
              color='#DC3D4B'
              className='mx-auto my-60'
            />
          </div>
        )}
        {game && !isLoading && (
          <div className='container px-5 pb-24 mx-auto flex flex-col'>
            <h1 className='halant text-3xl uppercase underline md:text-4xl lg:text-5xl font-bold text-white my-10'>
              {title}
            </h1>
            <div className=''>
              <CarouselSingle>
                {screenshots.length > 0 &&
                  screenshots.map((item, index) => {
                    return (
                      <div className='flex justify-center' key={index}>
                        <img
                          className='h-auto max-w-4xl object-cover object-center mb-6 mx-auto'
                          //TODO: use Validator Package (npm i validator) to check if url is working
                          src={item.image}
                          alt='content'
                        ></img>
                      </div>
                    )
                  })}
              </CarouselSingle>
              <div className='flex flex-col sm:flex-row mt-10'>
                <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
                  <div className='flex flex-col items-start text-left justify-center'>
                    <h4 className='halant text-white font-medium mt-4 text-lg'>
                      Genre: <span className='text-[#DC3D4B]'>{genre}</span>
                    </h4>
                    <h4 className='halant text-white font-medium mt-4 text-lg'>
                      Platform:{' '}
                      <span className='text-[#DC3D4B]'>{platform}</span>
                    </h4>
                    <h4 className='halant text-white font-medium mt-4 text-lg'>
                      Publisher:{' '}
                      <span className='text-[#DC3D4B]'>{publisher}</span>
                    </h4>
                    <h4 className='halant text-white font-medium mt-4 text-lg'>
                      Developer:{' '}
                      <span className='text-[#DC3D4B]'>{developer}</span>
                    </h4>
                    <h4 className='halant text-white font-medium mt-4 text-lg'>
                      Release-Date:{' '}
                      <span className='text-[#DC3D4B]'>{release_date}</span>
                    </h4>
                    <div className='w-12 h-1 bg-red-500 rounded mt-2 mb-2' />
                    <h4 className='halant text-white font-medium my-4 text-lg'>
                      Minimum System Requirements:
                    </h4>
                    <p className='halant text-white'>
                      OS: <span className='text-[#DC3D4B]'>{os ?? 'N/A'}</span>
                    </p>
                    <p className='halant text-white'>
                      Processor:{' '}
                      <span className='text-[#DC3D4B]'>
                        {processor ?? 'N/A'}
                      </span>
                    </p>
                    <p className='halant text-white'>
                      Memory:{' '}
                      <span className='text-[#DC3D4B]'>{memory ?? 'N/A'}</span>
                    </p>
                    <p className='halant text-white'>
                      Graphics:{' '}
                      <span className='text-[#DC3D4B]'>
                        {graphics ?? 'N/A'}
                      </span>
                    </p>
                    <p className='halant text-white'>
                      Storage:{' '}
                      <span className='text-[#DC3D4B]'>{storage ?? 'N/A'}</span>
                    </p>
                  </div>
                </div>
                <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
                  <p className='nunito leading-relaxed text-lg mb-4 text-white'>
                    {description}
                  </p>
                  <a
                    href={game_url}
                    className='nunito text-gray-500 underline'
                    target='_blank'
                    rel='noreferrer'
                  >
                    See More Information
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer title='Games' />
    </div>
  )
}
export default SinglePage
