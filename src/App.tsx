import './App.css';

import React from 'react';

import { Provider } from 'react-redux';
import {
  Route,
  Routes,
} from 'react-router-dom';

import { ThemeProvider } from '@mui/material';

import theme from './assets/theme';
import Header from './containers/header/header';
import BooksList from './pages/books-list';
import DetailedPageBook from './pages/detailed-book-page';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path='/' element={<BooksList />} />
          <Route path='/:id' element={<DetailedPageBook />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
