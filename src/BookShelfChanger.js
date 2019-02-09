import React from "react"
import propTypes from 'prop-types'
import * as BooksAPI from "./BooksAPI";

class BookShelfChanger extends React.Component {


    selectDefaultValueForSelect  = selectedValue => {
        if (typeof selectedValue === 'undefined') {
            return 'none'
        } else return selectedValue
    }

    state = {
        selectedValue: this.selectDefaultValueForSelect(this.props.currentShelf)
    }

    changeSelect = event => {
        event.persist() // TODO: see why, don't really understand ...
        if (event.target.value !== 'move') {
            this.setState(previousState => previousState.selectedValue = event.target.value)
            this.props.selectToAddBooksChanged(event.target.value, this.props.book)
            BooksAPI.update(this.props.book, event.target.value)
        }
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
    book: propTypes.object,
    selectToAddBooksChanged: propTypes.func
}

export default BookShelfChanger