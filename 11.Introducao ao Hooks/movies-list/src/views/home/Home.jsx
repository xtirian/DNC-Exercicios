import React, { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieServices";
import MovieCard from "../../components/movieCard/MovieCard";

//STYLE
import "./home.scss";

const Home = ({ searchValueProp }) => {
  const [moviesList, setMoviesList] = useState([]);

  const getMovies = async () => {
    let {
      data: { results },
    } = await MovieService.getMovies();

    setMoviesList(results);
  };

  const getMoviesSearch = async (name) => {
    let {
      data: {
        results
      }
    } = await MovieService.searchMovies(name);

    setMoviesList(results)
  }

  useEffect(() => {
    getMovies();
  }, []);


  useEffect(() => {
    if(searchValueProp){
      getMoviesSearch(searchValueProp)
    } else if (searchValueProp == ""){
      getMovies()
    }
  }, [searchValueProp])
  

  useEffect(() => {
    console.log(searchValueProp);
  });



  return (
    <section className="Home">
      {
        //aqui eu vou mapear e apresentar os filmes em formato de cards
        moviesList.map((m) => (
          <MovieCard
            key={m.id}
            title={m.title}
            id={m.id}
            image={m.poster_path}
          />
        ))
      }
    </section>
  );
};

export default Home;
