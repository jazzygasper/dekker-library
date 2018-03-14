import * as types from './actionTypes'

export function addBook (book) {
  return { type: types.ADD_BOOK, book };
}
