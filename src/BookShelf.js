import React from 'react'
import propTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'

const getBookByShelf = (allBooks, group) => {
    return allBooks.filter(book => book.shelf === group)
}

const BookShelf = (props) => {

    const getBookAndShelf = (shelf, bookid) => {
        props.receiveBookAndShelf(shelf, bookid)
    }

    return (
        <div className="list-books-content">
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.group}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {getBookByShelf(props.allBooks, props.group).map((book, index) =>
                            <Book
                                key={index}
                                book={book}
                                bookAndShelf={getBookAndShelf}
                            ></Book>
                        )}
                    </ol>
                </div>
            </div>
            <div className="open-search">
                <Link
                    to='addBook'
                >
                    <button>Add a book</button>
                </Link>
            </div>
        </div>
    )
}


BookShelf.propTypes = {
    group: propTypes.string,
    allBooks: propTypes.array,
    receiveBookAndShelf: propTypes.func
}

export default BookShelf