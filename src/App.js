import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: -> DONE: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false,
    allBooks: [], // = books in shelf.
    groups: ['currentlyReading', 'wantToRead', 'read'],
      test: '1'
  }

    componentDidMount() {
      console.log('componentDidMount')
      BooksAPI.getAll().then(
          data => {
              console.log(data)
              this.setState(({allBooks: data}))
          }
      )
    }

    actualiseShelf = (shelf, book) => { // Call only from our list page.
      if (shelf === 'none') {
          this.removeBookFromList(book)
      } else if (this.state.allBooks.length >= 1) { // Change shelf, group only if present in list.
          for (let i = 0; i < this.state.allBooks.length; i++) {
              if (this.state.allBooks[i].id === book.id) {
                  this.setState(previousState => previousState.allBooks[i].shelf = shelf)
              }
          }
      }
        // BooksAPI.update(book, shelf)
    }

    addOrRemoveBook = (shelf, book) => { // Call only from add book page.
      if (shelf === 'none') {
          this.removeBookFromList(book)
      } else {
          // If book is already in shelf, just actualise shelf (if it's not, add book).
          const bookFromParam = book
          const found = this.state.allBooks.find(book => book.id === bookFromParam.id)
          if (typeof found !== 'undefined') { // in shelf.
              this.actualiseShelf(shelf, book)
          } else {
              book.shelf = shelf
              this.setState((previousState) => ({allBooks: [...previousState.allBooks, book]}))
          }
      }
    }

    removeBookFromList = (book) => {
        this.setState(previousState => previousState.allBooks = previousState.allBooks.filter(bookInList => bookInList.id !== book.id))
    }

  render() {
          return (
              <div className="app">

                  <Route exact path='/' render={() => (
                      <Header
                          books={this.state.allBooks}
                          title='MyReads'
                      ></Header>
                  )}/>

                  <Route exact path='/' render={() => (
                      <ListBooks
                          allBooks={this.state.allBooks}
                          groups={this.state.groups}
                          getShelfAndBook={this.actualiseShelf}
                      ></ListBooks>
                  )}/>

                  <Route exact path='/search' render={() => (
                      <SearchBooks
                        booksInShelf={this.state.allBooks}
                        receiveBookAndShelf={this.addOrRemoveBook}
                      >
                      </SearchBooks>
                  )}/>

              </div>
          )
  }
}

export default BooksApp
