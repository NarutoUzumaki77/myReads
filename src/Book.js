import React from "react"
import './App.css'

class Book extends React.Component {
    render() {
        const book = this.props.book
        return (
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ 
                width: 128, 
                height: 193, 
                backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
              </div>
              <div className="book-shelf-changer">
                <select 
                    defaultValue={this.props.shelf}
                    onChange={event => this.props.onSwitchBookOnShelves(
                        event.target.value,
                        book
                    )}
                >
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors.map(author => (
                <div key={author} className="book-authors">
                    {author}
                </div>
            ))}
          </div>
        )
    }
}

export default Book;