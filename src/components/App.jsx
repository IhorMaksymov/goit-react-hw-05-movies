import { Route, Routes } from 'react-router-dom';
import { lazy } from "react";

import { GlobalStyle } from "./GlobalStyle";

import Layout from './Layout';
import Cast from "components/Cast";
import Reviews from './Reviews';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<MoviesDetails />}>
            <Route path='/movies/:movieId/cast' element={<Cast />} />
            <Route path='/movies/:movieId/reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;