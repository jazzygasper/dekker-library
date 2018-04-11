import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as libraryActions from '../../actions/libraryActions';
import AddBookForm from './AddBookForm';
import BorrowBookForm from './BorrowBookForm';
import toastr from 'toastr';

export class ManageLibraryPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      book: Object.assign({}, this.props.book),
      errors: {},
      updating: false
    };
    this.updateBookState = this.updateBookState.bind(this);
    this.saveBook = this.saveBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.book.bookId !== nextProps.book.bookId) {
      // this.setState({book: Object.assign({}, nextProps.book)});
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

    if(this.state.book.title.length < 1) {
      errors.title = 'Books must have a title';
      formIsValid = false;
    }
    this.setState({errors: errors});
    return formIsValid;
  }

  saveBook(event) {
    event.preventDefault();

    if(!this.bookFormIsValid()) {
      return;
    }
    this.setState({updating: true});
    console.log(this.state.book);
    this.props.actions.saveBook(this.state.book)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({updating: false});
      });
  }

  updateBook(event) {
    event.preventDefault();

    if(!this.bookFormIsValid()) {
      return;
    }
    this.setState({updating: true});
    this.props.actions.updateBook(this.state.book)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({updating: false});
      });
  }

  deleteBook(event) {
    event.preventDefault();

    if(!this.bookFormIsValid()) {
      return;
    }
    this.setState({updating: true});
    this.props.actions.deleteBook(this.state.book)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({updating: false});
      });
  }

  redirect() {
    this.setState({updating: false});
    // this.context.router.push('/library');
    toastr.success('Book Saved');
  }

  render () {
    const isBook = this.state.book.bookId;
    return (
      <div>
      {isBook ? (
        <BorrowBookForm
        onChange={this.updateBookState}
        onSave={this.updateBook}
        onDelete={this.deleteBook}
        book={this.state.book}
        errors={this.state.errors}
        updating={this.state.updating}
        />
      ) : (
        <AddBookForm
        onChange={this.updateBookState}
        onSave={this.saveBook}
        book={this.state.book}
        errors={this.state.errors}
        updating={this.state.updating}
        />
      )}
      </div>
    );
  }
}

ManageLibraryPage.propTypes = {
  book: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageLibraryPage.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageLibraryPage);
