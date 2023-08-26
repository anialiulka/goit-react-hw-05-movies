import { getTrendingMovies } from 'API';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [errorType, setErrorType] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies()
      .then(results => setTrendingMovies(results))
      .catch(error => {
        setErrorType(error);
        console.log(errorType);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [errorType]);

  return (
    <>
      {isLoading && <Loader />}
      {trendingMovies.length > 0 && <MovieGallery movies={trendingMovies} />}
    </>
  );
};

export default Home;
