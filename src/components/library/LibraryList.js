import React, { PropTypes } from 'react';
import LibraryListRow from './LibraryListRow';

const LibraryList = ({ library }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Subject</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {library.map(book =>
          <LibraryListRow key={book.id} book={book} />
        )}
      </tbody>
    </table>
  );
};

LibraryList.propTypes = {
  library: PropTypes.array.isRequired
};

export default LibraryList;
