import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BorrowBookForm from './BorrowBookForm';
import * as libraryActions from '../../actions/libraryActions';
import toastr from 'toastr';
import moment from 'moment';

class BookPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      book: Object.assign({}, this.props.book),
      errors: {},
      updating: false
    };
    this.updateBookState = this.updateBookState.bind(this);
    this.updateBook = this.updateBook.bind(this);
    // this.returnBook = this.returnBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.book.bookId !== nextProps.book.bookId) {
      this.setState({book: Object.assign({}, nextProps.book)});
    }
  }

  updateBookState(event) {
    const field = event.target.name;
    let book = Object.assign({}, this.state.book);
    book[field] = event.target.value;
    return this.setState({book: book});
  }

  bookFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if(this.state.book.currentOwner.length < 1) {
      errors.currentOwner = 'Please provide your name to borrow book';
      formIsValid = false;
    }
    this.setState({errors: errors});
    return formIsValid;
  }

  updateBook(event) {
    event.preventDefault();

    if(!this.bookFormIsValid()) {
      return;
    }
    const book = Object.assign({}, this.state.book);

    if(this.state.book.currentOwner) {
      let dateNextMonth = moment().add(1, 'months').format("dddd, MMMM Do YYYY");
      book.checkOutDate = dateNextMonth;
    }
    this.setState({updating: true});
    this.props.actions.updateBook(book)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({updating: false});
      });
  }

  // returnBook(event) {
  //   event.preventDefault();
  //
  //   this.state.book.currentOwner = '';
  //   this.state.book.checkOutDate = '';
  //
  //   this.setState({updating: true});
  //   this.props.actions.updateBook(this.state.book)
  //     .then(() => this.redirect())
  //     .catch(error => {
  //       toastr.error(error);
  //       this.setState({updating: false});
  //     });
  // }

  deleteBook(event) {
    event.preventDefault();

    if(!this.bookFormIsValid()) {
      return;
    }
    this.setState({updating: true});
    this.props.actions.deleteBook(this.state.book)
      .then(() => {
        this.props.actions.loadLibrary();
        return this.redirect();
      })
      .catch(error => {
        toastr.error(error);
        this.setState({updating: false});
      });
  }

  redirect() {
    this.setState({updating: false});
    this.context.router.push('/library');
    toastr.success('Book Saved');
  }


  render () {
    return (
      <div>
        <BorrowBookForm
        onChange={this.updateBookState}
        onSave={this.updateBook}
        onReturn={this.returnBook}
        onDelete={this.deleteBook}
        book={this.state.book}
        errors={this.state.errors}
        updating={this.state.updating}
        />
      </div>
    );
  }
}

BookPage.propTypes = {
  book: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

BookPage.contextTypes = {
  router: PropTypes.object
};

function getBookById(library, id) {
  const book = library.filter(book => book.bookId == id);
  if (book.length) return book[0];
}

function mapStateToProps(state, ownProps) {
  const bookId = ownProps.params.bookId; //from path '/book/:id'
  let book = {bookId: '', title: '', author: '', subject: '', currentOwner: '', checkOutDate: '', amazonLink: '', coverUrl: ''};

  if(bookId && state.library.length > 0) {
    book = getBookById(state.library, bookId);
  }

  return {
    book: book
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(libraryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
