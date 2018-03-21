import * as types from './actionTypes';
import libraryApi from '../api/mockLibraryApi';

export function loadLibrarySuccess(library) {
  return { type: types.LOAD_LIBRARY_SUCCESS, library };
}

export function createBookSuccess(book) {
  return { type: types.CREATE_BOOK_SUCCESS, book };
}

export function updateBookSuccess(book) {
  return { type: types.UPDATE_BOOK_SUCCESS, book };
}

export function loadLibrary() {
  return function(dispatch) {
    return libraryApi.getAllLibraryBooks().then(library => {
      dispatch(loadLibrarySuccess(library));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveBook(book) {
  return function(dispatch, getState) {
    return libraryApi.saveBook(book).then(savedBook => {
      book.id ? dispatch(updateBookSuccess(savedBook)) : dispatch(createBookSuccess(savedBook));
    }).catch(error => {
      throw(error);
    });
  };
}
