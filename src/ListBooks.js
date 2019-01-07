import React from "react"
import propTypes from 'prop-types'
import BookShelf from "./BookShelf";


const ListBooks = (props) => {
    const getBookAndShelf = (shelf, book) => {
        props.getShelfAndBook(shelf, book)
    }
    return (
        <div className="list-books">
            {props.groups.map((group, index) =>
                <BookShelf
                    key={index}
                    group={group}
                    allBooks={props.allBooks}
                    receiveBookAndShelf={getBookAndShelf}
                >
                </BookShelf>
            )
            }
        </div>
    )
}

ListBooks.propTypes = {
    groups: propTypes.array,
    allBooks: propTypes.array,
    getShelfAndBook: propTypes.func
}

export default ListBooks