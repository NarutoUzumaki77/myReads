import React from "react"
import Book from "./Book"
import './App.css'

class BookShelf extends React.Component {

    switchShelves = (shelf, book) => {
        this.props.onSwitchBookOnShelves(shelf, book)
    };

    render() {
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  {this.props.books.map(book => (
                    <li key={book.id}>
                        <Book book={book} onSwitchBookOnShelves={this.switchShelves} shelf={book.shelf}/>
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        )
    }
}

export default BookShelf;