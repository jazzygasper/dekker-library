import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as libraryActions from '../../actions/libraryActions';
import AddBookForm from './AddBookForm';
import toastr from 'toastr';

class AddBookPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      book: Object.assign({}, this.props.book),
      errors: {},
      updating: false
    };
    this.updateBookState = this.updateBookState.bind(this);
    this.saveBook = this.saveBook.bind(this);
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
    this.props.actions.saveBook(this.state.book)
      .then(() => this.redirect())
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
        <AddBookForm
        onChange={this.updateBookState}
        onSave={this.saveBook}
        book={this.state.book}
        errors={this.state.errors}
        updating={this.state.updating}
        />
      </div>
    );
  }
}

AddBookPage.propTypes = {
  book: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

AddBookPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let book = {bookId: '', title: '', author: '', subject: '', currentOwner: '', checkOutDate: '', amazonLink: '', coverUrl: ''};

  return {
    book: book
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(libraryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBookPage);
