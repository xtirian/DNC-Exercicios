import axios from "axios";


const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "4c96e92afd96685a72f4cf14b95ea2b7";

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;
const searchBaseUrl = (path) => `${BASE_URL}${path}&api_key=${API_KEY}`;

export class MovieService {

  //static serve para que eu só consiga fazer a chamada dos métodos após chamar a classe
  static getMovies(){
    return axios(withBaseUrl("movie/popular"))
  }

  static getMovieDetail(id){
    return axios(withBaseUrl(`movie/${id}`))
  }

  static searchMovies(name){
    return axios(searchBaseUrl("search/movie"+`?query=${name}`))
  }
}