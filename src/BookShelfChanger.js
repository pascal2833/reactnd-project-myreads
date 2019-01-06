import React from "react"
import propTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class BookShelfChanger extends React.Component {

    state = {
        selectedValue: this.props.currentShelf
    }

    changeSelect = event => {
        event.persist()
        this.setState(previousState => previousState.selectedValue = event.target.value)
        BooksAPI.update(this.props.book, this.props.currentShelf).then(
            data => {
                console.log(data)
            })
    }


    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={event => this.changeSelect(event)} value={this.state.selectedValue}>
                    {this.props.valuesAndTexts.map((valueAndText, index) => (
                        <option
                            value={valueAndText.value}
                            key={index}
                        >
                            {valueAndText.text}
                        </option>
                    ))}
                </select>
            </div>
        )
    }
}

BookShelfChanger.propTypes = {
    valuesAndTexts: propTypes.array,
    currentShelf: propTypes.string,
    book: propTypes.object
}

export default BookShelfChanger