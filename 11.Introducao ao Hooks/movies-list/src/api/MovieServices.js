import axios from "axios";


const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "4c96e92afd96685a72f4cf14b95ea2b7";

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
  static getMovies(){
    return axios(withBaseUrl("movie/popular"))
  }

  static getMovieDetail(id){
    return axios(withBaseUrl(`movie/${id}`))
  }

  static searchMovies(name){
    return axios(withBaseUrl("search/movie/"+`&query=${name}`))
  }
}