import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const BookList = ({ bookNames }) => {
  return (
    <div>
      <AppBar position="static" p={2}>
        <Toolbar>
          <Typography variant="h6">
            Your Books
          </Typography>
        </Toolbar>
      </AppBar>
      <BookItems bookNames={bookNames}/>
    </div>
  );
};

const BookItems = ({ bookNames }) => (
  bookNames.length > 0
    ? <SomeBookItems bookNames={bookNames} />
    : <NoBookItems />
);

const SomeBookItems = ({ bookNames }) => (
  bookNames.map(bookName => (
    <Card key={bookName} m="200px">
      <CardContent>
        <Typography>
          {bookName}
        </Typography>
      </CardContent>
    </Card>
  ))
);

const NoBookItems = () => (
  <Card>
    <CardContent>
      <Typography style={{ color: "gray" }}>
        (No books yet)
      </Typography>
    </CardContent>
  </Card>
);

export default BookList;
