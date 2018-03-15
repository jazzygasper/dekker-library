import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LibraryListRow = ({ book }) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.subject}</td>
      <td>{book.currentOwner}</td>
      <td>{book.checkOutDate}</td>
      <td><a href={book.amazonLink} target="_blank">Buy Online</a></td>
    </tr>
  );
};

LibraryListRow.propTypes = {
  book: PropTypes.object.isRequired
};

export default LibraryListRow;
