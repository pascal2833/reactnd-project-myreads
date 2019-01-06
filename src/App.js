import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false,
    allBooks: [],
    groups: []
  }

    componentDidMount() {
      BooksAPI.getAll().then(
          data => {
              console.log(data)
              this.setState(({allBooks: data}))
              const groups = data.reduce((acc, book) => {
                  const found = acc.find(e => e.shelf === book.shelf)
                  if (!found) {
                      acc.push(book)
                  }
                  return acc
              }, [])
              const groupsOK = groups.map(book => book.shelf)
              this.setState(previousState => previousState.groups = groupsOK)
          }
      )
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

                  <div className="list-books">
                      <Route exact path='/' render={() => (
                          <div className="list-books-content">
                              {this.state.groups.map((group, index) =>
                                  <BookShelf
                                      key={index}
                                      group={group}
                                      allBooks={this.state.allBooks}
                                  >
                                  </BookShelf>
                              )
                              }
                          </div>
                      )}/>
                  </div>

                  <Route exact path='/addBook' render={() => (
                      <SearchBooks/>
                  )}/>

              </div>
          )
  }
}

export default BooksApp
