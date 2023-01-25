import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as S from './styles';

import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Search from './pages/Search';

import Header from './components/Header';
import GlobalCss from './global.css';
// import Details from './components/Details';

function App() {
  return (
    <S.Container>
      <Router>
        <GlobalCss />
        <Header />
        {/* <Details /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie-detail" element={<MovieDetail />} />
        </Routes>
      </Router>
    </S.Container>
  );
}

export default App;
