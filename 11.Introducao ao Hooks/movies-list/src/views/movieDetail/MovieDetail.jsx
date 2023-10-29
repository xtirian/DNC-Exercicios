import React, { useEffect, useState } from "react";

//STYLE
import "./movieDetail.scss";
import { Link, useParams } from "react-router-dom";
import { MovieService } from "../../api/MovieServices";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  const getMovieDetail = async () => {
    let { data } = await MovieService.getMovieDetail(movieId);
    setMovie(data);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  useEffect(() => {
    console.log(movieId);
    console.log(movie);
  }, [movie]);

  return (
    <section className="MovieDetail">
      <div className="MovieDetail__container">
        <div className="MovieDetail__col">
          <h1 className="MovieDetail__title">{movie.title}</h1>
          <div className="MovieDetail__image">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt=""
            />
          </div>
        </div>
        <div className="MovieDetail__col">
          <div className="MovieDetail__details">
            <div className="MovieDetail__detail">
              <span>Budget:</span> {movie.budget}
            </div>
            <div className="MovieDetail__detail">
              <span>Original language:</span> {movie.original_language}
            </div>
            <div className="MovieDetail__detail">
              <span>Popularity:</span> {movie.popularity}
            </div>
            <div className="MovieDetail__detail">
              <span>Overview:</span> {movie.overview}
            </div>
          </div>
          <Link to={`/`} className="MovieDetail__button">
            Voltar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
