import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import LibraryPage from './components/library/LibraryPage';
import AddBookPage from './components/addBook/AddBookPage';
import BookPage from './components/book/BookPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="library" component={LibraryPage} />
    <Route path="add-book" component={AddBookPage} />
    <Route path="book/:bookId" component={BookPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
