import React from "react"
import propTypes from 'prop-types'

class BookShelfChanger extends React.Component {

    state = {
        selectedValue: this.props.currentShelf
    }

    changeSelect = event => {
        console.log('changed!!!!')
        this.setState(previousState => previousState.selectedValue = event.target.value)
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={this.changeSelect} value={this.state.selectedValue}>
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
    currentShelf: propTypes.string
}

export default BookShelfChanger