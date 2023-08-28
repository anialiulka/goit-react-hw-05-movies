import { useParams } from 'react-router-dom';
import { getMoreInformation } from 'API';
import { useState, useEffect } from 'react';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [selectedMovieCast, setSelectedMovieCast] = useState([]);
  const [errorType, setErrorType] = useState(null);
  const infotype = 'credits';

  useEffect(() => {
    getMoreInformation(movieId, infotype)
      .then(result => setSelectedMovieCast(result.data.cast))
      .catch(error => {
        setErrorType(error);
        console.log(errorType);
      })
      .finally(() => {});
  }, [errorType, movieId]);

  const renderProfileImage = profilePath => {
    if (profilePath) {
      return `https://image.tmdb.org/t/p/w200${profilePath}`;
    } else {
      return './images/person.png';
    }
  };

  return (
    <div className={css.parent}>
      {selectedMovieCast.length > 0 &&
        selectedMovieCast.map(({ profile_path, name, character }) => (
          <div key={name}>
            <img
              src={renderProfileImage(profile_path)}
              alt={`poster of ${name}`}
            />
            <p>Name: {name}</p>
            <p>Character: {character}</p>
          </div>
        ))}
    </div>
  );
};

export default Cast;
