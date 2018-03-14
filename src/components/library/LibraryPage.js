import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as libraryActions from '../../actions/libraryActions';

class LibraryPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      book: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const book = this.state.book;
    book.title = event.target.value;
    this.setState({book: book});
  }

  onClickSave() {
    this.props.actions.addBook(this.state.book);
  }

  bookRow (book, index) {
    return <div key={index}>{book.title}</div>;
  }

  render () {
    return (
      <div>
        <h1>Library</h1>
        {this.props.library.map(this.bookRow)}
        <h2>Add Book</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.book.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

LibraryPage.propTypes = {
  actions: PropTypes.object.isRequired,
  library: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    library: state.library
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(libraryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LibraryPage);
