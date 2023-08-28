import { useParams } from 'react-router-dom';
import { getMoreInformation } from 'API';
import { useState, useEffect } from 'react';
import css from './Reviews.module.css';

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
      {selectedMovieReviews.length > 0 ? (
        selectedMovieReviews.map(({ author_details, content, created_at }) => (
          <div key={author_details.username} className={css.reviewsBlock}>
            <p className={css.heading}>
              Name: <span className={css.content}>{author_details.name}</span>
            </p>
            <p className={css.heading}>
              Rating:{' '}
              <span className={css.content}> {author_details.rating}</span>
            </p>
            <p className={css.heading}>
              Review: <span className={css.content}> {content}</span>
            </p>
            <p className={css.heading}>
              Created at:<span className={css.content}> {created_at}</span>
            </p>
          </div>
        ))
      ) : (
        <p>Reviews not found.</p>
      )}
    </div>
  );
};

export default Reviews;
