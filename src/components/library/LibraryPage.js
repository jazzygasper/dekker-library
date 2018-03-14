import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as libraryActions from '../../actions/libraryActions';

class LibraryPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  bookRow (book, index) {
    return <div key={index}>{book.title}</div>;
  }

  render () {
    return (
      <div>
        <h1>Library</h1>
        {this.props.library.map(this.bookRow)}
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
