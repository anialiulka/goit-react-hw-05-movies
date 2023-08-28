import {
  useParams,
  NavLink,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieDetails } from 'API';
import css from './Moviedetails.module.css';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

import { BsArrowLeft } from 'react-icons/bs';

const StyledLink = styled(NavLink)`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  background-image: linear-gradient(to left, #f20089, #8367c7);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;

  &.active {
    color: #f20089;
  }
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState({});
  const [errorType, setErrorType] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/products');

  useEffect(() => {
    getMovieDetails(movieId)
      .then(result => setSelectedMovie(result.data))
      .catch(error => {
        setErrorType(error);
        console.log(errorType);
      })
      .finally(() => {});
  }, [errorType, movieId]);

  const { poster_path, title, genres, overview, vote_average } = selectedMovie;
  const rating = (vote_average * 100).toString().slice(0, 2);

  return (
    selectedMovie.title && (
      <div>
        <div className={css.headingBlock}>
          <Link to={backLinkHref.current} className={css.heading}>
            <BsArrowLeft className={css.arrow} />
            Back to Trending Movies
          </Link>
        </div>
        <div className={css.movieBlock}>
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={`poster for ${title}`}
          />
          <div>
            <h2 className={css.movieTitle}>{title}</h2>
            <p className={css.movieText}>Positive reviews: {rating}%</p>
            <h3 className={css.movieSubtitle}>Overview</h3>
            <p className={css.movieText}>{overview}</p>
            <h3 className={css.movieSubtitle}>Genres</h3>
            <div className={css.genresBlock}>
              {genres.map(genre => (
                <p key={genre.id} className={css.movieGenre}>
                  {genre.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h2 className={css.heading}>Additional Information</h2>
          <ul className={css.list}>
            <li className={css.movieSubtitle}>
              <StyledLink to="cast" className={css.movieTitle}>
                Cast
              </StyledLink>
            </li>
            <li className={css.movieSubtitle}>
              <StyledLink to="reviews" className={css.movieTitle}>
                Reviews
              </StyledLink>
            </li>
          </ul>
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    )
  );
};

export default MovieDetails;
