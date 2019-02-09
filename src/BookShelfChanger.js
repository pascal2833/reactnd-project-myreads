import React from "react"
import propTypes from 'prop-types'

class BookShelfChanger extends React.Component {

    state = {
        selectedValue: this.props.currentShelf
    }

    changeSelect = event => {
        event.persist() // TODO: see why, don't really understand ...
        if (event.target.value !== 'move' && event.target.value !== 'none') {
            this.setState(previousState => previousState.selectedValue = event.target.value)
            this.props.selectToAddBooksChanged(event.target.value, this.props.book)
        } else if (event.target.value === 'none') {
            this.props.selectToAddBooksChanged(event.target.value, this.props.book)
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