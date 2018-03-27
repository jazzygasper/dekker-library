import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as libraryActions from '../actions/libraryActions';

describe('Store', () => {
  it('should handle creating books', () => {
    const store = createStore(rootReducer, initialState);
    const book = {
      title: 'Clean Code'
    };

    const action = libraryActions.createBookSuccess(book);
    store.dispatch(action);

    const actual = store.getState().library[0];
    const expected = {
      title: 'Clean Code'
    };

    expect(actual).toEqual(expected);
  });
});
