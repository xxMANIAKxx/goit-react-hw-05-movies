import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/movies-api';
import { Link, useLocation } from 'react-router-dom';
import { ListMovies, MovieItem } from './home.styled';
import css from './home.module.css';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <ListMovies>
        <h1 className={css.title}>Tranding today</h1>
        {loading
          ? 'Loading...'
          : data.map(({ title, id }) => (
              <MovieItem key={id}>
                <Link
                  to={`/movies/${id}`}
                  state={{ from: location }}
                  className={css.movieItem}
                >
                  {title}
                </Link>
              </MovieItem>
            ))}
      </ListMovies>
    </>
  );
};

export default HomePage;
