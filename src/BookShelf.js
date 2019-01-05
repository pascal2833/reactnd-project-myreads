import React, { Component } from 'react'
import propTypes from 'prop-types'

class BookShelf extends Component {
    render() {
        return (
            <div className="list-books-content">
                cirenic
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{this.props.group}ss</h2>
                    </div>
                </div>
            </div>
        )
    }
    
}


BookShelf.propTypes = {
    group: propTypes.string
}

export default BookShelf