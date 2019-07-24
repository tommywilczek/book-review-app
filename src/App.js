import React from 'react';
import BookListPage from './BookListPage'

export default class App extends React.Component {
    state = { foo: 'bar' };
    render() {
      return (
      <div>
        <BookListPage />
      </div>
      )
    }
}
