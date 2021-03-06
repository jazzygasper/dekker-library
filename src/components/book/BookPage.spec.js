import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import BookPage from './BookPage';

describe('Book Page', () => {
  it('sets error msg when trying to save empty title', () => {
    const props = {
      actions: { saveBook: () => { return Promise.resolve(); }},
      book: {id: '', title: '', author: '', subject: '', currentOwner: '', checkOutDate: '', amazonLink: '', coverUrl: ''}
    };
    const wrapper = mount(<BookPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Books must have a title');
  });
});
