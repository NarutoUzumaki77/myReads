import React from "react"
import BookCase from "./BookCase"
import './App.css'

class MainPage extends React.Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookCase name="Currently Reading"/>
                        <BookCase name="Want to Read"/>
                        <BookCase name="Read"/>
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