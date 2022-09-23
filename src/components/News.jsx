import { SpinnerDotted } from 'spinners-react'
import { useState, useEffect } from 'react'
import { getAllNews } from '../service/api'
import Footer from './Footer'
import NaviBar from './NaviBar'
import AOS from 'aos'

const AllNews = () => {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getNewsList = async () => {
    setIsLoading(true)
    setTimeout(async () => {
      const result = await getAllNews()
      setNews(result.data)
      setIsLoading(false)
    }, 1000)
  }

  useEffect(() => {
    document.title = 'Game On | NEWS'
    getNewsList()
    AOS.init()
  }, [])

  //TODO: Spacing (Footer)
  return (
    <div className='bg-[#291D24]'>
      <NaviBar title='News' />
      <div className='container mx-auto px-5 pb-40'>
        <h5
          data-aos='fade-right'
          data-aos-duration='1000'
          className='halant text-[#DC3D4B] underline text-5xl text-center lg:text-start font-bold text-white my-10'
        >
          LATEST NEWS
        </h5>
        {isLoading && (
          <div className='mx-auto'>
            <SpinnerDotted
              size='20%'
              color='#DC3D4B'
              className='mx-auto mb-10'
            />
          </div>
        )}
        <div className='flex flex-wrap gap-8 bg-[#281D1D] halant text-white'>
          {news &&
            !isLoading &&
            news.map((news, index) => {
              const { title, image, date, description, link } = news
              return (
                <div
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  className='flex flex-col lg:flex-row shadow-lg w-[100%] lg:min-h-[250px]'
                  key={index}
                >
                  <div className='lg:w-2/5 lg:flex lg:items-center'>
                    <img className='mx-auto' src={image} alt={title} />
                  </div>
                  <div className='p-3 lg:pt-0 lg:w-3/5 text-center lg:text-start'>
                    <div className='mb-2'>
                      <h3 className='font-bold text-xl uppercase underline tracking-wide'>
                        <a href={link} target='_blank' rel='noreferrer'>
                          {title}
                        </a>
                      </h3>
                    </div>
                    <div className='mb-2'>
                      <p>
                        <span className='nunito text-gray-400 text-xs px-2'>
                          {date}
                        </span>
                      </p>
                    </div>
                    <div className='mb-2'>
                      <p>
                        <span className='nunito font-thin text-lg lg:text-base px-2'>
                          {description}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      <Footer title='News' />
    </div>
  )
}

export default AllNews
