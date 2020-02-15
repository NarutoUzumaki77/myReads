import React from "react"
import Book from "./Book"
import './App.css'

class BookCase extends React.Component {
    render() {
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li>
                    <Book />
                </li>
              </ol>
            </div>
          </div>
        )
    }
}

export default BookCase;