import { SpinnerDotted } from 'spinners-react'
import { useState, useEffect } from 'react'
import { getAllNews } from '../service/api'
import { Link } from 'react-router-dom'
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
    }, 500)
  }

  useEffect(() => {
    getNewsList()
    AOS.init()
  }, [])

  return (
    <div className='bg-[#261F1F]'>
      <div className='container mx-auto px-5'>
        <h5
          data-aos='fade-up'
          data-aos-duration='800'
          className=' halant text-6xl font-bold text-center text-white my-20 underline pt-10'
        >
          LATEST NEWS
        </h5>
        {isLoading && (
          <div className='mx-auto'>
            <SpinnerDotted size='10%' color='#DC3D4B' className='mx-auto' />
          </div>
        )}
        <div className='flex flex-wrap gap-8 bg-[#281D1D] halant text-white'>
          {news &&
            !isLoading &&
            news.slice(0, 3).map((news, index) => {
              const { title, image, date, description, link } = news

              return (
                <div
                  data-aos={`fade-${index % 2 !== 0 ? 'right' : 'left'}`}
                  data-aos-duration='1000'
                  className={`flex flex-col lg:flex-row shadow-lg w-[100%] py-5 lg:min-h-[250px]
				      ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                  key={index}
                >
                  <div className='lg:w-2/5 lg:flex lg:items-center'>
                    <img className='mx-auto' src={image} alt={title} />
                  </div>
                  <div
                    className={`p-3 lg:pt-0 lg:w-3/5 text-center lg:text-start ${
                      index % 2 !== 0 ? 'lg:text-end' : ''
                    }`}
                  >
                    <div className='mb-2'>
                      <h3 className='font-bold text-xl uppercase underline tracking-wide'>
                        <a href={link} target='_blank' rel='noreferrer'>
                          {title}
                        </a>
                      </h3>
                    </div>
                    <div className='mb-2'>
                      <p>
                        <span className='nunito text-xs px-2'>{date}</span>
                      </p>
                    </div>
                    <div className='mb-2'>
                      <p>
                        <span className='nunito text-sm px-2'>
                          {description}
                        </span>
                      </p>
                    </div>
                    <button className='bg-[#DC3D4B] hover:bg-gray-800 hover:border-white hover:border text-white py-1 px-4 rounded mt-4'>
                      <Link to='/news'>See More</Link>
                    </button>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default AllNews
