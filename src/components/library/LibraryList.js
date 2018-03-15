import React, { PropTypes } from 'react';
// import LibraryListRow from './LibraryListRow';

const LibraryList = ({ library }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Subject</th>
          <th>Current Owner</th>
          <th>Check Out Date</th>
          <th>Amazon Link</th>
        </tr>
      </thead>
      <tbody>
        {library.map(book =>
          <tr key={book.bookId} book={book}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.subject}</td>
            <td>{book.currentOwner}</td>
            <td>{book.checkOutDate}</td>
            <td><a href={book.amazonLink} target="_blank">Buy Online</a></td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

LibraryList.propTypes = {
  library: PropTypes.array.isRequired
};

export default LibraryList;
