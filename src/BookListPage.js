import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import NewBookForm from './NewBookForm';
import BookList from './BookList';

export default class BookListPage extends Component {
    state = {
      bookNames: [],
      shouldShowNewBookForm: false,
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
      this.setState({ shouldShowNewBookForm: true });
    }

    renderNewBookForm() {
      if (this.state.shouldShowNewBookForm) {
        return <NewBookForm
                onSave={this.addBook}
              />
      }
    }

    render() {
      const { bookNames } = this.state;

      return (
        <div>
          <Button
            variant="contained" color="primary"
            data-test="addBookBtn"
            onClick={this.showNewBookForm}
          >
            Add Book
          </Button>
          {this.renderNewBookForm()}
          <BookList bookNames={bookNames} />
        </div>
      );
    }
}
