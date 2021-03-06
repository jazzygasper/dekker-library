import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const AddBookForm = ({book, onSave, onChange, updating, errors}) => {
  return (
    <form>
      <h1>Add Book</h1>
      <TextInput
        name="title"
        label="Title"
        value={book.title}
        onChange={onChange}
        error={errors.title}/>

      <TextInput
        name="author"
        label="Author"
        value={book.author}
        onChange={onChange}
        error={errors.author}/>

      <TextInput
        name="subject"
        label="Subject"
        value={book.subject}
        onChange={onChange}
        error={errors.subject}/>

      <TextInput
        name="currentOwner"
        label="Current Owner"
        value={book.currentOwner}
        onChange={onChange}
        error={errors.currentOwner}/>

      <TextInput
        name="amazonLink"
        label="Amazon Link"
        value={book.amazonLink}
        onChange={onChange}
        error={errors.amazonLink}/>

      <TextInput
        name="coverUrl"
        label="Book Cover URL"
        value={book.coverUrl}
        onChange={onChange}
        error={errors.coverUrl}/>

      <input
        type="submit"
        disabled={updating}
        value={updating ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

AddBookForm.propTypes = {
  book: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  updating: PropTypes.bool,
  errors: PropTypes.object
};

export default AddBookForm;
