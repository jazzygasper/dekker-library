import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const BookForm = ({book, onSave, onChange, saving, errors}) => {
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
          name="checkOutDate"
          label="Check Out Date"
          value={book.checkOutDate}
          onChange={onChange}
          error={errors.checkOutDate}/>

          <TextInput
            name="amazonLink"
            label="Amazon Link"
            value={book.amazonLink}
            onChange={onChange}
            error={errors.amazonLink}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

BookForm.propTypes = {
  book: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default BookForm;
