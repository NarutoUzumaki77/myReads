import React from "react"
import BookShelf from "./BookCase"
import './App.css'
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

    switchBookOnShelves = (shelf, book) => {
        this.props.onSwitchBookOnShelves(shelf, book)
    };

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf name="Currently Reading" books={this.props.currentlyreading} onSwitchBookOnShelves={this.switchBookOnShelves}/>
                        <BookShelf name="Want to Read" books={this.props.wantToRead} onSwitchBookOnShelves={this.switchBookOnShelves}/>
                        <BookShelf name="Read" books={this.props.read} onSwitchBookOnShelves={this.switchBookOnShelves}/>
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