import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return<div className="col-lg-12 welcome"><h1>Select a book to get started</h1></div>
    }

    return (
      <div className="col-lg-12">
        <h3 className="col-lg-12 welcome">Detail:</h3>
        <div className="col-lg-12 details">Title: {this.props.book.title}</div>
        <div className="col-lg-12 details">Pages: {this.props.book.pages}</div>
        <div className="col-lg-12 details">Description: {this.props.book.description}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
