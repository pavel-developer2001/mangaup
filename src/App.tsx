import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TitlePage from './pages/TitlePage'
import RatingPage from './pages/RatingPage'

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/title' component={TitlePage} />
          <Route path='/rating' component={RatingPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
