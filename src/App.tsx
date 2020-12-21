import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TitlePage from './pages/TitlePage'
import RatingPage from './pages/RatingPage'
import CatalogPage from './pages/CatalogPage'
import PersonPage from './pages/PersonPage'

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/title' component={TitlePage} />
          <Route path='/rating' component={RatingPage} />
          <Route path='/catalog' component={CatalogPage} />
          <Route path='/person' component={PersonPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
