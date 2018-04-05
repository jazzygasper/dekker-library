import expect from 'expect';
import * as libraryActions from './libraryActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

describe('Library Actions', () => {
  describe('createBookSuccess', () => {
    it('should creat a CREATE_BOOK_SUCCESS action', () => {
      const book = {bookId: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_BOOK_SUCCESS,
        book: book
      };

      const action = libraryActions.createBookSuccess(book);

      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  });

  it('should create BEGIN_AJAX_CALL and LOAD_LIBRARY_SUCCESS when loading library', (done) => {
    fetchMock
      .getOnce('http://localhost:8000/api/library', { body: { library: [{bookId: 'clean-code', title: 'Clean Code'}] }
    })
    .catch(error => {
      throw(error);
    });

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_LIBRARY_SUCCESS, body: {library: [{bookId: 'clean-code', title: 'Clean Code'}]}}
    ];

    const store = mockStore({library: []});

    store.dispatch(libraryActions.loadLibrary()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_LIBRARY_SUCCESS);
      done();
    });
  });
});
