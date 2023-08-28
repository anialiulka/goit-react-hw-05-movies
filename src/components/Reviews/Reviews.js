import { useParams } from 'react-router-dom';
import { getMoreInformation } from 'API';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const [selectedMovieReviews, setSelectedMovieReviews] = useState([]);
  const [errorType, setErrorType] = useState(null);
  const infotype = 'reviews';

  useEffect(() => {
    getMoreInformation(movieId, infotype)
      .then(result => setSelectedMovieReviews(result.data.results))
      .catch(error => {
        setErrorType(error);
        console.log(errorType);
      })
      .finally(() => {});
  }, [errorType, movieId]);

  console.log(selectedMovieReviews);

  return (
    <div>
      {selectedMovieReviews.length > 0 &&
        selectedMovieReviews.map(({ author_details, content, created_at }) => (
          <div key={author_details.username}>
            <p>Name: {author_details.name}</p>
            <p>Rating: {author_details.rating}</p>
            <p>Review: {content}</p>
            <p>Created at: {created_at}</p>
          </div>
        ))}
    </div>
  );
};

export default Reviews;
