import { useSearchParams } from 'react-router-dom';
import { searchMovieByKeywords } from 'API';
import { useEffect, useState } from 'react';
import { MovieGalleryItem } from 'components/MovieGalleryItem.js/MovieGalleryItem';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('query') ?? '';
  const [searchedMovie, setSearchedMovie] = useState([]);

  useEffect(() => {
    if (movie === '') {
      setSearchedMovie([]);
      return;
    } else {
      searchMovieByKeywords(movie)
        .then(results => {
          setSearchedMovie(results.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [movie]);

  console.log(movie);
  console.log(searchedMovie);

  const updateQueryString = e => {
    if (e.target.value === '') {
      setSearchParams({});
    } else {
      setSearchParams({ query: e.target.value });
    }
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <input type="text" value={movie} onChange={updateQueryString} />

      {searchedMovie && searchedMovie.length > 0 && (
        <ul>
          {searchedMovie.map(movie => (
            <MovieGalleryItem
              key={movie.id}
              title={movie.title}
              id={movie.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
