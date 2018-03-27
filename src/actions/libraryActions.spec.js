import expect from 'expect';
import * as libraryActions from './libraryActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Library Actions', () => {
  describe('createBookSuccess', () => {
    it('should creat a CREATE_BOOK_SUCCESS action', () => {
      const book = {id: 'clean-code', title: 'Clean Code'};
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
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_LIBRARY_SUCCESS when loading library', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, { body: { course: [{ id: 'clean-code', title: 'Clean Code'}] }});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_LIBRARY_SUCCESS, body: {library: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];

    const store = mockStore({library: [], expectedActions});
    store.dispatch(libraryActions.loadLibrary()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_LIBRARY_SUCCESS);
      done();
    });
  });
});
