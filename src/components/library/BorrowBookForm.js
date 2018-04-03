import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const BorrowBookForm = ({book, onSave, onChange, saving, errors}) => {
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
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={onSave}/>
      </div>
    </form>
  );
};

BorrowBookForm.propTypes = {
  book: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default BorrowBookForm;
