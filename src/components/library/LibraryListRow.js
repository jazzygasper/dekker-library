import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LibraryListRow = ({ book }) => {
  const isBookBorrowed = book.currentOwner;
  return (
    <tr>
      <td><Link to={'/book/' + book.bookId}>{book.title}</Link></td>
      <td>{book.author}</td>
      <td>{book.subject}</td>
      <td>{isBookBorrowed && "unavailable"}</td>
    </tr>
  );
};

LibraryListRow.propTypes = {
  book: PropTypes.object.isRequired
};

export default LibraryListRow;
