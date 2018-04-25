import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const BorrowBookForm = ({book, onSave, onDelete, onChange, updating, errors}) => {
  return (
    <form>
      <h1 className="form__title">Borrow Book</h1>
      <div className="form__book-cover">
        <img src={book.coverUrl} alt="book cover" width="300px"/>
      </div>
      <div className="form__book-details">
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p><strong>Subject: </strong>{book.subject}</p>
        <p><a href={book.amazonLink} target="_blank">Buy Online</a></p>
        <TextInput
          name="currentOwner"
          label="Owner"
          value={book.currentOwner}
          onChange={onChange}
          error={errors.currentOwner}/>
        <TextInput
          name="checkOutDate"
          label="Check Out Date"
          value={book.checkOutDate}
          onChange={onChange}
          error={errors.checkOutDate}/>
        <input
          type="submit"
          disabled={updating}
          value={updating ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={onSave}/>
        <input
          type="submit"
          disabled={updating}
          value={updating ? 'Deleting...' : 'Delete Book'}
          className="btn btn-primary"
          onClick={onDelete}/>
      </div>
    </form>
  );
};

BorrowBookForm.propTypes = {
  book: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  updating: PropTypes.bool,
  errors: PropTypes.object
};

export default BorrowBookForm;
