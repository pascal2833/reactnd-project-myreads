import React from "react";
import propTypes from 'prop-types'


const getAuthorsOk = (authors) => {
    return authors.reduce((acc, author) => {
        acc = `${acc} ${author} `
        return acc
    }, [])
}
const Book = (props) => (
    <li>
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.smallThumbnail})` }}
                >
                </div>
                <div className="book-shelf-changer">
                    <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{getAuthorsOk(props.book['authors'])}</div>
        </div>
    </li>
)

Book.propTypes = {
    book: propTypes.object
}

export default Book
