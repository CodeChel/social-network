import * as axios from 'axios';


const apiKey = '9eeead5842d8437baa80d2864227d069'
const  baseURL = 'https://newsapi.org/v2/top-headlines'
export const newsAPI = {
    
    getNews(country, page){
       return axios.get(`${baseURL}?country=${country}&pageSize=20&page=${page}&apiKey=${apiKey}`).then((res) => res)
    }
}