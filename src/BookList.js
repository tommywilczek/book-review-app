import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './BookList.module.css';

const BookList = ({ bookNames }) => {
  return (
    <div>
      {
        bookNames.map(bookName => (
          <Card key={bookName} m="200px">
            <CardContent>
              <Typography>
                {bookName}
              </Typography>
            </CardContent>
          </Card>
        ))
      }
    </div>
  );
};

export default BookList;
