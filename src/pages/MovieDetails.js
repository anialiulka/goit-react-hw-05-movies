import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieDetails } from 'API';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [errorType, setErrorType] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/products');

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(result => setSelectedMovie(result.data))
      .catch(error => {
        setErrorType(error);
        console.log(errorType);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [errorType, movieId]);

  const { poster_path, title, genres, overview, vote_average } = selectedMovie;
  const rating = (vote_average * 100).toString().slice(0, 2);
  console.log(rating);

  return (
    selectedMovie.title && (
      <div>
        <div>
          <Link to={backLinkHref.current}>Back to Trending Movies</Link>
        </div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={`poster for ${title}`}
          />
          <h2>{title}</h2>
          <p>Positive reviews: {rating}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres.map(genre => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </div>
        <div>
          <h2>Additional Information</h2>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    )
  );
};

export default MovieDetails;
