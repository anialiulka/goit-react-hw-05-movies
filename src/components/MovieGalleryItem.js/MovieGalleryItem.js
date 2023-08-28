import { Link, useLocation } from 'react-router-dom';
import css from './MovieGalleryItem.module.css';
export const MovieGalleryItem = ({ title, id }) => {
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
