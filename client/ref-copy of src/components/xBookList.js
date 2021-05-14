// This is from the module 21 tutorial 

// dont' know if we'll be using it but it's here for referenceimport { Card, CardText, CardHeader, CardTitle, CardBody } from 'reactstrap';

const BookList = ({ books }) => {
  if (!books.length) {
    return <h3>There are no books in this library!</h3>;
  }

  return (
    <div>
      {books &&
        books.map((book) => (
          <Card outline color='secondary' key={book._id}>
            <CardHeader>Title: {book.title}</CardHeader>
            <CardBody>
              <CardTitle>Author: {book.author}</CardTitle>
              <CardText># of Pages: {book.pages}</CardText>
            </CardBody>
          </Card>
        ))}
    </div>
  );
};

export default BookList;
