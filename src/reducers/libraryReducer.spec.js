import expect from 'expect';
import libraryReducer from './libraryReducer';
import * as actions from '../actions/libraryActions';

describe('Library Reducer', () => {
  it('should add book when passed CREATE_BOOK_SUCCESS', () => {
    const initialState = [
      {title: 'Building Microservices'},
      {title: 'Cloud Native Java'}
    ];
    const newBook = {title: 'High Performance Javascript'};
    const action = actions.createBookSuccess(newBook);

    const newState = libraryReducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('Building Microservices');
    expect(newState[1].title).toEqual('Cloud Native Java');
    expect(newState[2].title).toEqual('High Performance Javascript');
  });

  it('should update book when passed UPDATE_BOOK_SUCCESS', () => {
    const initialState = [
      {id: 'A', title: 'Building Microservices'},
      {id: 'B', title: 'Cloud Native Java'},
      {id: 'C', title: 'High Performance Javascript'}
    ];
    const bookUpdate = {id: 'B', title: 'Mastering JIRA'};
    const action = actions.updateBookSuccess(bookUpdate);

    const newState = libraryReducer(initialState, action);
    const updatedBook = newState.find(a => a.id == bookUpdate.id);
    const untouchedBook = newState.find(a => a.id == 'A');

    expect(newState.length).toEqual(3);
    expect(updatedBook.title).toEqual('Mastering JIRA');
    expect(untouchedBook.title).toEqual('Building Microservices');
  });

});
