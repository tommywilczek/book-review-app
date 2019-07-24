import React, { Component } from 'react';
import NewBookForm from './NewBookForm';
import BookList from './BookList';

export default class BookListPage extends Component {
    state = {
      bookNames: [],
    }

    addBook = (newBookName) => {
      this.setState((state) => ({
        bookNames: [
          newBookName,
          ...state.bookNames,
        ],
      }),
      );
    }

    render() {
      const { bookNames } = this.state;
      return (
        <div>
          <button data-test="addBookBtn">
                    Add Book
          </button>
          <NewBookForm onSave={this.addBook} />
          <BookList bookNames={bookNames} />
        </div>
      );
    }
}
