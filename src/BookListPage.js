import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';

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

    openModal = () => {
      this.setState({ shouldShowNewBookForm: true });
    }

    closeModal = () => {
      this.setState({ shouldShowNewBookForm: false });
    }

    render() {
      const {
        bookNames,
        shouldShowNewBookForm,
      } = this.state;

      return (
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <Button
              variant="contained" color="primary"
              data-test="addBookBtn"
              onClick={this.openModal}
            >
              Add Book
            </Button>
          </Grid>

          <Dialog open={shouldShowNewBookForm} onClose={this.closeModal} aria-labelledby="add-book-dialog-title">
            <DialogTitle id="add-book-dialog-title">Add a book</DialogTitle>
            <DialogContent>
              <NewBookForm onSave={this.addBook} onCancel={this.closeModal} />
            </DialogContent>
          </Dialog>

          <Grid item xs={12}>
            <BookList bookNames={bookNames} />
          </Grid>
        </Grid>
      );
    }
}
