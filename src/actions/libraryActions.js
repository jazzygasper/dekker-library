import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

const baseUrl = "http://localhost:8000";
const headers = {
   'Accept': 'application/json',
   'Content-Type': 'application/json'
  };

export function loadLibrarySuccess(library) {
  return { type: types.LOAD_LIBRARY_SUCCESS, library };
}

export function createBookSuccess(book) {
  return { type: types.CREATE_BOOK_SUCCESS, book };
}

export function updateBookSuccess(book) {
  return { type: types.UPDATE_BOOK_SUCCESS, book };
}

export function deleteBookSuccess(book) {
  return { type: types.DELETE_BOOK_SUCCESS, book };
}

export function loadLibrary() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return fetch(baseUrl+"/library")
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
    return fetch(baseUrl+"/book", {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(book)
    })
    .then(savedBook => {
      return savedBook.json();
    }).then(book => {
      dispatch(createBookSuccess(book));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function updateBook(book) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return fetch(baseUrl+"/book/" + book.bookId, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(book)
    })
    .then(savedBook => {
      return savedBook.json();
    }).then(book => {
      dispatch(updateBookSuccess(book));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteBook(book) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return fetch(baseUrl+"/book/" + book.bookId, {
      method: 'DELETE'
    })
    .then(deletedBook => {
      return deletedBook.json();
    }).then(jsonBook => {
      dispatch(deleteBookSuccess(book));
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });

  };
}
