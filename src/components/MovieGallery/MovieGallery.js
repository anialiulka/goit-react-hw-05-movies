import { MovieGalleryItem } from 'components/MovieGalleryItem.js/MovieGalleryItem';
import css from './MovieGallery.module.css';

export const MovieGallery = ({ movies }) => {
  return (
    <div>
      <h1 className={css.heading}>Trending movies</h1>{' '}
      <ul className={css.list}>
        {movies.map(movie => (
          <MovieGalleryItem key={movie.id} title={movie.title} id={movie.id} />
        ))}
      </ul>
    </div>
  );
};
