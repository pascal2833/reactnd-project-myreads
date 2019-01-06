import React from "react"
import propTypes from 'prop-types'
import BookShelf from "./BookShelf";



const ListBooks = (props) => (
    <div className="list-books">
        {props.groups.map((group, index) =>
            <BookShelf
                key={index}
                group={group}
                allBooks={props.allBooks}
            >
            </BookShelf>
        )
        }
    </div>
)

ListBooks.propTypes = {
    groups: propTypes.array,
    allBooks: propTypes.array
}

export default ListBooks