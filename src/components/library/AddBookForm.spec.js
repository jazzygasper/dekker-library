import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import AddBookForm from './AddBookForm';

function setup(saving) {
  const props = {
    book: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<AddBookForm {...props}/>);
}

describe('Add Book Form', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Add Book');
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toEqual('Save');
  });

  it('save button is labeled "Saving..." when not saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toEqual('Saving...');
  });
});
