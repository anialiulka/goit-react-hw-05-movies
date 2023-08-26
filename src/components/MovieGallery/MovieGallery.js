import { MovieGalleryItem } from 'components/MovieGalleryItem.js/MovieGalleryItem';

export const MovieGallery = ({ movies }) => {
  return (
    <div>
      <h1>Trending movies</h1>{' '}
      <ul>
        {movies.map(movie => (
          <MovieGalleryItem key={movie.id} title={movie.title} id={movie.id} />
        ))}
      </ul>
    </div>
  );
};
