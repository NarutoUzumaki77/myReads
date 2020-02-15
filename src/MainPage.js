import React from "react"
import BookShelf from "./BookCase"
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

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

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf name="Currently Reading" books={this.state.currentlyreading} onSwitchBookOnShelves={this.switchBookOnShelves}/>
                        <BookShelf name="Want to Read" books={this.state.wantToRead} onSwitchBookOnShelves={this.switchBookOnShelves}/>
                        <BookShelf name="Read" books={this.state.read} onSwitchBookOnShelves={this.switchBookOnShelves}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">
                        <button>Add a book</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default MainPage;