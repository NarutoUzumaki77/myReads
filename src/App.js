import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from "./MainPage"
import SearchPage from "./SearchPage"
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books: [],
    currentlyreading: [],
    read: [],
    wantToRead: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
        this.updateBookState(books)
    });
  }

  updateBookState = (books) => {
    const currentlyreading = books
        .filter(book => book.shelf === "currentlyReading");
    const read = books
        .filter(book => book.shelf === "read");
    const wantToRead = books
        .filter(book => book.shelf === "wantToRead");
    this.setState(() => ({
        books: books,
        currentlyreading: currentlyreading,
        read: read,
        wantToRead: wantToRead
    }));
  }

  switchBookOnShelves = (shelf, book) => {
    const allbook = this.state.books;
    const newBooks = allbook.map(filteredbook => {
        if (filteredbook.id === book.id) {
            filteredbook.shelf = shelf
        }
        return filteredbook;
    })
    this.updateBookState(newBooks);
    BooksAPI.update(book, shelf);
  };

  addBook = (shelf, book) => {
    let updatebooks = this.state.books;
    updatebooks.push(book)
    this.setState(() => ({
      books: updatebooks
    }))
    this.switchBookOnShelves(shelf, book)
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage
            books={this.state.books} 
            currentlyreading={this.state.currentlyreading}
            read={this.state.read}
            wantToRead={this.state.wantToRead}
            onSwitchBookOnShelves={this.switchBookOnShelves} 
            />
        )} 
        />
        <Route exact path='/search' render={() => (
            <SearchPage books={this.state.books} 
            onAddBook={this.addBook}/>
          )} 
        />
      </div>
    )
  }
}

export default BooksApp;
