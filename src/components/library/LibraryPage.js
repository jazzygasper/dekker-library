import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as libraryActions from '../../actions/libraryActions';
import LibraryList from './LibraryList';

class LibraryPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddBookPage = this.redirectToAddBookPage.bind(this);
  }

  redirectToAddBookPage () {
    browserHistory.push('/add-book');
  }

  render () {
    const {library} = this.props;
    return (
      <div>
        <h1>Library</h1>
        <input
          type="submit"
          value="Add Book"
          className="btn btn-primary"
          onClick={this.redirectToAddBookPage}/>
        <LibraryList library={library} />
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
