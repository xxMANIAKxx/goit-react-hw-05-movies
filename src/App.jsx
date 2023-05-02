import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Container from './components/Container/Container';
import Loader from 'components/Loader/Loader';
import MovieCastView from './pages/MovieCastView';

const HomePage = lazy(() =>
  import('./pages/HomePage')
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage')
);
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);
const Reviews = lazy(() =>
  import('./pages/MovieReview')
);
const NotFoundView = lazy(() =>
  import('./pages/NotFoundView')
);

export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader />}>
         <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>  
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
            <Route path="cast">
            <MovieCastView />
            </Route>
            <Route path="reviews">
              <Reviews />
              </Route>
          </Route>
          <Route path="*">
            <NotFoundView />
            </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}