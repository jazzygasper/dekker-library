import * as types from './actionTypes';
import libraryApi from '../api/mockLibraryApi';

// export function addBook(book) {
//   return { type: types.ADD_BOOK, book };
// }

export function loadBooksSuccess(books) {
  return { type: types.LOAD_BOOKS_SUCCESS, books };
}

export function loadBooks() {
  return function(dispatch) {
    return libraryApi.getAllLibraryBooks().then(books => {
      dispatch(loadBooksSuccess(books));
    }).catch(error => {
      throw(error);
    });
  };
}
