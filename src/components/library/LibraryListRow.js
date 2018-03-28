import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LibraryListRow = ({ book }) => {
  return (
    <tr>
      <td><Link to={'/book/' + book.id}>{book.title}</Link></td>
      <td>{book.author}</td>
      <td>{book.subject}</td>
    </tr>
  );
};

LibraryListRow.propTypes = {
  book: PropTypes.object.isRequired
};

export default LibraryListRow;
