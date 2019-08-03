import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';

export default class NewBookForm extends Component {
    state = {
      bookName: '',
    }

    handleTextChange = (event) => {
      this.setState({ bookName: event.target.value });
    }

    saveBook = () => {
      const { bookName } = this.state;
      const { onSave } = this.props;

      onSave(bookName);
    }

    render() {
      const { bookName } = this.state;
      return (
        <div>
          <TextField
            label="Name"
            value={bookName}
            data-test="newBookTitleField"
            onChange={this.handleTextChange}
          />
          <DialogActions>
            <Button
              color="primary"
              data-test="saveBookBtn"
              onClick={this.saveBook}
            >
              Save
            </Button>
          </DialogActions>
        </div>
      );
    }
}
