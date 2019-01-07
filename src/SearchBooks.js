import React from "react"
import propTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import {Link} from "react-router-dom"
import Book from "./Book"


class SearchBooks extends React.Component {

    state = {
        books: []
    }

    searchInputChanged = (event) => {
        BooksAPI.search(event.target.value).then(
            data => {
                if (typeof data !== 'undefined') {
                    for (let i = 0; i < data.length; i++) {
                        for (let j = 0; j < this.props.booksInShelf.length; j++) {
                            if (data[i].id === this.props.booksInShelf[j].id) {
                                data[i] = this.props.booksInShelf[j]
                            }
                        }
                    }
                    this.setState(previousState => previousState.books = data)
                }
            }
        )
    }

    getBookAndShelf = (shelf, book) => {
        this.props.receiveBookAndShelf(shelf, book)
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">

                    <Link
                        className="close-search"
                        to='/'
                    >Close
                    </Link>

                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={ event => this.searchInputChanged(event) }
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.length >= 1 && (
                            this.state.books.map((book, index) =>
                            <Book
                                key={index}
                                book={book}
                                bookAndShelf={this.getBookAndShelf}
                            ></Book>
                        ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

SearchBooks.propTypes = {
    booksInShelf: propTypes.array,
    receiveBookAndShelf: propTypes.func
}

export default SearchBooks
