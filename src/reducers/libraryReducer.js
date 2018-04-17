import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function libraryReducer(state = initialState.library, action) {
  switch(action.type) {
    case types.LOAD_LIBRARY_SUCCESS:
      return action.library;

    case types.CREATE_BOOK_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.book)
      ];

    case types.UPDATE_BOOK_SUCCESS:
      return [
        ...state.filter(book => book.bookId !== action.book.bookId),
        Object.assign({}, action.book)
      ];

    case types.DELETE_BOOK_SUCCESS:
      return state;

    default:
      return state;
  }
}
