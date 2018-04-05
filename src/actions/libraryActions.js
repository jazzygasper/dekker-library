import * as types from './actionTypes';
import libraryApi from '../api/mockLibraryApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

const baseUrl = "http://localhost:8000";

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
    dispatch(beginAjaxCall());
    return fetch(baseUrl+"/api/library")
      .then(response => {
        return response.json();
    }).then(library => {
      dispatch(loadLibrarySuccess(library.library));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveBook(book) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return fetch(baseUrl+"/api/book", {
      method: 'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify(book)
    })
    .then(savedBook => {
      book.bookId ? dispatch(updateBookSuccess(savedBook)) : dispatch(createBookSuccess(savedBook));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
