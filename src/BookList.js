import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

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
  <Grid container spacing={2}>
    {bookNames.map(bookName => (
      <Grid key={bookName} item xs={12}>
        <Card>
          <CardContent>
            <Typography>
              {bookName}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
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
