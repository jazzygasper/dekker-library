import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render () {
    return (
      <div className="jumbotron">
        <h1>Dekker Library</h1>
        <p>The Dekker Library can be found in &#39;Gibraltar&#39;. It&#39;s a place where a thing called books can be found and words and stuff inside the books can help you learn information. A bit like the internet but with less cat videos.</p>
        <Link to="library" className="btn btn-primary btn-lg">Borrow a Book</Link>
      </div>
    );
  }
}

export default HomePage;
