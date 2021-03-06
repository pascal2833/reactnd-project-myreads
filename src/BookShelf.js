import React from 'react'
import propTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'

const getBookByShelf = (allBooks, group) => {
    return allBooks.filter(book => book.shelf === group)
}

const returnGoodGroupName = (group) => {
    switch (group) {
        case 'currentlyReading':
            return 'Currently Reading'
        case 'wantToRead':
            return 'Want to Read'
        case 'read':
            return 'Read'
        case 'none':
            return 'none'
        default:
            console.error('No group received')
    }
}

const BookShelf = (props) => {

    const getBookAndShelf = (shelf, book) => {
        props.receiveBookAndShelf(shelf, book)
    }

    return (
        <div className="list-books-content">
            <div className="bookshelf">
                <h2 className="bookshelf-title">{returnGoodGroupName(props.group)}</h2>
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
                    to='search'
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