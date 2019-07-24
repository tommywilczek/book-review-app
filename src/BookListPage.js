import React, { Component } from 'react';
import NewBookForm from './NewBookForm';
import BookList from './BookList';

export default class BookListPage extends Component {
    state = {
      bookNames: [],
      shouldShowNewBookForm: false
    }

    addBook = (newBookName) => {
      this.setState({ shouldShowNewBookForm: false });
      this.setState((state) => ({
        bookNames: [
          newBookName,
          ...state.bookNames,
        ],
      }),
      );
    }

    showNewBookForm = () => {
      this.setState({ shouldShowNewBookForm: true});
    }
    

    render() {
      const { 
        bookNames,
        shouldShowNewBookForm
      } = this.state;

      return (
        <div>
          <button 
            data-test="addBookBtn"
            onClick={this.showNewBookForm}
          >
                    Add Book
          </button>
          {shouldShowNewBookForm
            ?
              <NewBookForm 
                onSave={this.addBook}
              />
            : null
          }
          <BookList bookNames={bookNames} />
        </div>
      );
    }
}
