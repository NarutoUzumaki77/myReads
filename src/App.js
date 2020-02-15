import React from 'react'

import './App.css'
import MainPage from "./MainPage"
import SearchPage from "./SearchPage"
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/search' component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp;
