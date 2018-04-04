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
      saving: false
    };
    this.updateBookState = this.updateBookState.bind(this);
    this.saveBook = this.saveBook.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.book.id !== nextProps.book.id) {
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

    if(this.state.book.title.length < 5) {
      errors.title = 'Title must be at least 5 characters long';
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

    this.setState({saving: true});
    this.props.actions.saveBook(this.state.book)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Book Saved');
    this.context.router.push('/library');
  }

  render () {
    console.log(this.state);
    const isBook = this.state.book.bookId;
    return (
      <div>
      {isBook ? (
        <BorrowBookForm
        onChange={this.updateBookState}
        onSave={this.saveBook}
        book={this.state.book}
        errors={this.state.errors}
        saving={this.state.saving}
        />
      ) : (
        <AddBookForm
        onChange={this.updateBookState}
        onSave={this.saveBook}
        book={this.state.book}
        errors={this.state.errors}
        saving={this.state.saving}
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
  const bookId = ownProps.params.id; //from path '/book/:id'
  let book = {bookId: '', title: '', author: '', subject: '', currentOwner: '', checkOutDate: '', amazonLink: ''};

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
