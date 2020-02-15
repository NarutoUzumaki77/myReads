import React from 'react'

import './App.css'
import MainPage from "./MainPage"
import SearchPage from "./SearchPage"

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
          <MainPage/>
      </div>
    )
  }
}

export default BooksApp;
