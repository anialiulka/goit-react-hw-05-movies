import { MovieGalleryItem } from 'components/MovieGalleryItem.js/MovieGalleryItem';

export const MovieGallery = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MovieGalleryItem key={movie.id} title={movie.title} />
      ))}
    </ul>
  );
};
