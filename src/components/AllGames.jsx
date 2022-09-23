import { SpinnerDotted } from 'spinners-react'
import { useState, useEffect } from 'react'
import { getAllGames } from '../service/api'
import Footer from './Footer'
import NaviBar from './NaviBar'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import AOS from 'aos'
import Search from './Search'

const AllGames = () => {
  const [games, setGames] = useState([])
  const [keyword, setKeyword] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const getInitialState = () => {
    const value = '-SELECT ALL-'
    return value
  }
  const [category, setCategory] = useState(getInitialState)

  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  const handleSearchChange = (e) => {
    setKeyword(e.target.value)
  }

  useEffect(() => {
    document.title = 'Game On | GAMES'
    AOS.init()
    const getGamesList = async () => {
      setIsLoading(true)
      setTimeout(async () => {
        const result = await getAllGames(category)
        setGames(
          result.data.filter((game) =>
            game.title.toLowerCase().includes(keyword.toLowerCase())
          )
        )
        setIsLoading(false)
      }, 1000)
    }
    getGamesList()
  }, [category, keyword])

  return (
    <div className='bg-[#291D24]'>
      <NaviBar title='Games' />
      <div className='container mx-auto px-5 pb-40'>
        <div
          data-aos='fade-right'
          data-aos-duration='1000'
          className='flex flex-col md:flex-row justify-between items-center pb-10'
        >
          <h1 className='halant text-center md:text-start text-3xl md:text-4xl lg:text-5xl font-bold text-white my-10'>
            EXPLORE THE BEST{' '}
            <span className='block'>
              <span className='text-[#DC3D4B]'>FREE GAMES</span> TODAY
            </span>
          </h1>
          <div className='flex justify-between items-center gap-4'>
            <p className='text-white'>Search:</p>
            <Search value={keyword} onChange={handleSearchChange} />
            <p className='text-white'>Filter:</p>
            <Dropdown value={category} onChange={handleChange} />
          </div>
        </div>
        {isLoading && (
          <div className='mx-auto'>
            <SpinnerDotted
              size='20%'
              color='#DC3D4B'
              className='mx-auto mb-80'
            />
          </div>
        )}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-around'>
          {games &&
            !isLoading &&
            games.map((game, index) => {
              const { title, thumbnail, genre, release_date } = game
              return (
                <div data-aos='fade-up' data-aos-duration='1000' key={index}>
                  <div className='bg-[#201B1B] rounded-lg'>
                    <Link to={`/games/${game.id}`}>
                      <img
                        className='h-50 w-full object-cover object-center mb-1'
                        src={thumbnail}
                        alt={title}
                      ></img>
                    </Link>
                    <div className='px-6 py-5'>
                      <h3 className='halant text-white text-xl font-semibold uppercase'>
                        {title}
                      </h3>
                      <h2 className='halant text-white my-2'>
                        Release Date:
                        <span className='text-[#DC3D4B] ml-1'>
                          {release_date}
                        </span>
                      </h2>
                      <div className='flex justify-end'>
                        <button className='nunito px-4 py-1 bg-[#747474] text-white text-sm rounded-full'>
                          {genre}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      <Footer title='Games' />
    </div>
  )
}

export default AllGames
