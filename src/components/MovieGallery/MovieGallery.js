import css from './MovieGallery.module.css';
import PropTypes from 'prop-types';
import MovieGalleryItem from 'components/MovieGalleryItem/MovieGalleryItem';

const MovieGallery = ({ movies }) => {
  return (
    <div>
      <h1 className={css.heading}>Trending movies</h1>
      <ul className={css.list}>
        {movies.map(movie => (
          <MovieGalleryItem title={movie.title} id={movie.id} />
        ))}
      </ul>
    </div>
  );
};

export default MovieGallery;
MovieGallery.propTypes = { movies: PropTypes.array.isRequired };
