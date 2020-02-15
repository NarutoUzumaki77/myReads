import React from "react"
import BookShelf from "./BookCase"
import './App.css'
import * as BooksAPI from './BooksAPI'

class MainPage extends React.Component {

    state = {
        books: [],
        currentlyreading: [],
        read: [],
        wantToRead: []
      }
    
      componentDidMount() {
        this.getAllBooks();
      }
    
      getAllBooks = () => {
        BooksAPI.getAll().then(books => {
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
        });
      };

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf name="Currently Reading" books={this.state.currentlyreading}/>
                        <BookShelf name="Want to Read" books={this.state.wantToRead}/>
                        <BookShelf name="Read" books={this.state.read}/>
                    </div>
                </div>
                <div className="open-search">
                    <button>Add a book</button>
                </div>
            </div>
        )
    }
}

export default MainPage;