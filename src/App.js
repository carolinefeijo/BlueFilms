import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as S from './styles';

import Home from './pages/Home';
import Search from './pages/Search';

import Header from './components/Header';
import GlobalCss from './global.css';
import MovieDetail from './pages/MovieDetail';
import { SearchMovie } from './services/api';
import Footer from './components/Footer/Index';

function App() {
  const [movieSearchList, setMovieSearchList] = useState('');

  const handleSearch = async (text) => {
    const data = await SearchMovie(text);
    setMovieSearchList(data);
  };

  return (
    <S.Container>
      <Router>
        <GlobalCss />
        <Header handleSearch={handleSearch} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/search"
            element={<Search movieList={movieSearchList} />}
          />
          <Route path="/moviedetail" element={<MovieDetail />} />
        </Routes>
      </Router>
      <Footer />
    </S.Container>
  );
}

export default App;
