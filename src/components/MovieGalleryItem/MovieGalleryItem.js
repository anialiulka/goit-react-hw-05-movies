import { Link, useLocation } from 'react-router-dom';
import css from './MovieGalleryItem.module.css';
import PropTypes from 'prop-types';

const MovieGalleryItem = ({ title, id }) => {
  const location = useLocation();

  return (
    <li className={css.listItem}>
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        className={css.link}
      >
        {title}
      </Link>
      ;
    </li>
  );
};

export default MovieGalleryItem;

MovieGalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
