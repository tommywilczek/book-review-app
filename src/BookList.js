import React from 'react';

const BookList = ({ bookNames }) => {
  return (
    <ul>
      {
        bookNames.map(bookName => (
          <li key={bookName}>{bookName}</li>
        ))
      }
    </ul>
  );
};

export default BookList;
