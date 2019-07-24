import React, { Component } from 'react';

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
          <input
            type="text"
            value={bookName}
            data-test="newBookTitleField"
            onChange={this.handleTextChange}
          />
          <button
            data-test="saveBookBtn"
            onClick={this.saveBook}
          >
                    Save
          </button>
        </div>
      );
    }
}
