import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class Booklist extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					className="col-lg-12 list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render () {
		return (
			<ul className="list-group col-lg-12">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	// what is returned will show up as mapStateToProps
	// inside of Booklist
	return {
		books: state.books
	};
}

// Returned from this function will be props on Booklist container
// selectBook is called, the result is passed to all reducers
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promote Booklist from Component to container - informing on dispatch method, selectBook
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);

// {this.renderList()} <-- calling helper function
// function mapStateToProps(state)
// take app state as argument (array and active)

// selectBook === action import
