import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import LibraryPage from './components/library/LibraryPage';
import ManageLibraryPage from './components/library/ManageLibraryPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="library" component={LibraryPage} />
    <Route path="book" component={ManageLibraryPage} />
    <Route path="book/:id" component={ManageLibraryPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
