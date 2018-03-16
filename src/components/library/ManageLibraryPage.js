import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as libraryActions from '../../actions/libraryActions';

class ManageLibraryPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <h1>Manage Library</h1>
    );
  }
}

ManageLibraryPage.propTypes = {

};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(libraryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageLibraryPage);
