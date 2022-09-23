import axios from 'axios'

const freeToPlayGamesAPI = process.env.REACT_APP_API_URL

const gamesList = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_API_KEY,
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
}

const newsList = {
  method: 'GET',
  url: 'https://videogames-news2.p.rapidapi.com/videogames_news/recent',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_API_KEY,
    'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com',
  },
}

export const getAllGames = async (category) => {
  let params
  if (category !== '-SELECT ALL-')
    params = { 'sort-by': 'release-date', category }
  else params = { 'sort-by': 'release-date' }
  return await axios.request({
    ...gamesList,
    url: `${freeToPlayGamesAPI}/games`,
    params: params,
  })
}

export const getSingleGame = async (id) => {
  return await axios.request({
    ...gamesList,
    url: `${freeToPlayGamesAPI}/game`,
    params: { id },
  })
}

export const getAllNews = async () => {
  return await axios.request(newsList)
}
