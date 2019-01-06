import React from "react"
import propTypes from 'prop-types'
import BookShelfChanger from "./BookShelfChanger"


const getAuthorsOk = (authors) => {
    if (typeof authors !== 'undefined') {
        return authors.reduce((acc, author) => {
            acc = `${acc} ${author} `
            return acc
        }, [])
    } else return []
}
const valuesAndTextsChanger = [
    {value: 'move', text: 'Move to...'},
    {value: 'currentlyReading', text: 'Currently Reading'},
    {value: 'wantToRead', text: 'Want to Read'},
    {value: 'read', text: 'Read'},
    {value: 'none', text: 'None'}
]

const Book = (props) => {
    const adaptShelf = (shelfChoosed, bookid) => {
        props.bookAndShelf(shelfChoosed, bookid)
    }
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{width: 128, height: 193, backgroundImage: `url(${props.book['imageLinks']['smallThumbnail']})`}}
                    >
                    </div>
                    <BookShelfChanger
                        valuesAndTexts={valuesAndTextsChanger}
                        currentShelf={props.book.shelf}
                        book={props.book}
                        selectToAddBooksChanged={adaptShelf}
                    ></BookShelfChanger>
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{getAuthorsOk(props.book.authors)}</div>
            </div>
        </li>
    )
}






Book.propTypes = {
    book: propTypes.object,
    bookAndShelf: propTypes.func
}

export default Book
