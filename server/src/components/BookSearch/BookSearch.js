import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux'

class BookSearch extends Component {

  render() {
    return (
      <div>
        <h1>Book Search!</h1>
        
      </div>
    );
  }
  
}



export default connect()(BookSearch);
