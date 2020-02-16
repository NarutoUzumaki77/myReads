import React from "react"
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from "./Book"

class SearchPage extends React.Component {

    state = {
        query: "",
        searchedBooks: []
    }

    updateQuery = query => {
        const mainPageBooks = this.props.books
        this.setState(() => ({
            query
        }))
        if (query !== "") {
            this.searchBookByQuery(query);
        }
    };

    searchBookByQuery = query => {
        BooksAPI.search(query).then(books => {
          this.setState(() => ({
            searchedBooks: books
          }));
        });
    };

    switchShelves = (shelf, book) => {
        const book_id = book.id
        BooksAPI.update(book, shelf).then(result => {
            result[shelf].map(res_book_id => {
                if (book_id === res_book_id) {
                    BooksAPI.get(book_id).then(book => {
                        this.props.onAddBook(shelf, book)
                    })
                }
            })
        })
    };

    getShelfState = (book) => {
        let shelf = "none"
        const bookfound = this.props.books.find(element => element.id === book.id)
        if (bookfound){
            shelf = bookfound.shelf
        }
        return shelf
    }

    render() {

        let showSearchBooks =
        this.state.query === "" ? [] : this.state.searchedBooks;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to={{ pathname: "/", state: 'flushDeal' }} >
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author" 
                            value={this.state.query}
                            onChange={event => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showSearchBooks.map(book => 
                            (book.hasOwnProperty("imageLinks") === true && book.hasOwnProperty("authors")) && (
                            <li key={book.id}>
                                <Book book={book} onSwitchBookOnShelves={this.switchShelves} shelf={this.getShelfState(book)}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage;