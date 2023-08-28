import { lazy, Suspense } from 'react';
import css from './MovieGallery.module.css';
import PropTypes from 'prop-types';

const MovieGalleryItem = lazy(() =>
  import('../MovieGalleryItem/MovieGalleryItem')
);

const MovieGallery = ({ movies }) => {
  return (
    <div>
      <h1 className={css.heading}>Trending movies</h1>
      <ul className={css.list}>
        {movies.map(movie => (
          <Suspense key={movie.id} fallback={<div>Loading...</div>}>
            <MovieGalleryItem title={movie.title} id={movie.id} />
          </Suspense>
        ))}
      </ul>
    </div>
  );
};

export default MovieGallery;
MovieGallery.propTypes = { movies: PropTypes.array.isRequired };
