import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

const StyledLink = styled(NavLink)`
  font-size: 25px;
  font-weight: 600;
  color: #6f2dbd;
  text-decoration: none;

  &.active {
    color: #f31559;
  }
`;

export const SharedLayout = () => {
  return (
    <div className={css.page}>
      <nav className={css.nav}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink
          to="/movies"
          className={css.title}
          activeclassname={css.active}
        >
          Movies
        </StyledLink>
      </nav>
      <main className={css.container}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
