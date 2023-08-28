import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.page}>
      <nav className={css.nav}>
        <NavLink to="/" className={css.title} activeclassname={css.active}>
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={css.title}
          activeclassname={css.active}
        >
          Movies
        </NavLink>
      </nav>
      <main className={css.container}>
        <Outlet />
      </main>
    </div>
  );
};
