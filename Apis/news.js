import axios from 'axios';

export default axios.create({
    baseURL: 'https://newsapi.org/v2/'
})

// https://newsapi.org/v2/top-headlines?country=de&apiKey=ea5ec64e9d7e41bb875ef2a6b99c0d63
