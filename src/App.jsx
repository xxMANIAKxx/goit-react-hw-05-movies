import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Container from './components/Container/Container';
import Loader from 'components/Loader/Loader';
import Cast from './pages/MovieCast/MovieCastView';

const Home = lazy(() =>
  import('./pages/HomePage/HomePage')
);
const Movies = lazy(() =>
  import('./pages/MoviePage/MoviesPage')
);
const MovieDetails = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);
const Reviews = lazy(() =>
  import('./pages/MovieReview/MovieReview')
);
const NotFound = lazy(() =>
  import('./pages/NotFoundView')
);

export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader />}>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
}