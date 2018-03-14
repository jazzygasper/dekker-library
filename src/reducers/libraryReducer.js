import * as types from '../actions/actionTypes';

export default function libraryReducer(state = [], action) {
  // switch(action.type) {
  //   case types.ADD_BOOK:
  //     return [...state,
  //       Object.assign({}, action.book)
  //     ];
  //
  //   default:
  //     return state;
  // }
  switch(action.type) {
    case types.LOAD_BOOKS_SUCCESS:
      return action.books;

    default:
      return state;
  }

}
