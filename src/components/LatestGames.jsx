import React from 'react'
import { useState, useEffect } from 'react'
import Carousel from './Carousel'
import { Link } from 'react-router-dom'
import { getAllGames } from '../service/api'
import AOS from 'aos'

const AllGames = () => {
  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getGamesList = async () => {
    setIsLoading(true)
    setTimeout(async () => {
      const result = await getAllGames()
      setGames(result.data)
      setIsLoading(false)
    }, 500)
  }

  useEffect(() => {
    getGamesList()
    AOS.init()
  }, [])

  return (
    <div className='container mx-auto py-20 px-5'>
      <div data-aos='fade-right' data-aos-duration='800'>
        <p className='nunito text-xl text-white'>Latest Game Releases</p>
        <p className='halant text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3'>
          TOP NEW GAMES RELEASED <span className='text-[#DC3D4B]'>2022</span>
        </p>
      </div>
      <div data-aos='fade-up' data-aos-duration='800'>
        <Carousel>
          {games &&
            !isLoading &&
            games.slice(0, 6).map((game, index) => {
              return (
                <div className='xl:w-1/4 md:w-1/2 p-4' key={index}>
                  <div className='bg-[#201B1B] rounded-lg'>
                    <Link to={`/games/${game.id}`}>
                      <img
                        className='h-40 w-full object-cover object-center mb-6'
                        src={game.thumbnail}
                        alt='content'
                      ></img>
                    </Link>
                    <div className='px-6 py-5'>
                      <h3 className='halant text-white text-xl font-semibold'>
                        {game.title}
                      </h3>
                      <h2 className='halant text-white my-2'>
                        Release Date:
                        <span className='text-[#DC3D4B] ml-1'>
                          {game.release_date}
                        </span>
                      </h2>
                      <div className='flex justify-end'>
                        <button className='nunito px-4 py-1 bg-[#747474] text-white text-sm rounded-full'>
                          {game.genre}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </Carousel>
        <div className='text-center mt-12'>
          <button className='bg-[#DC3D4B] hover:bg-gray-800 hover:border-white hover:border text-white py-1 px-4 rounded mt-2'>
            <Link to='/games'>See More</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AllGames
