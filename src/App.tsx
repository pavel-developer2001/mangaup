import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TitlePage from './pages/TitlePage'

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/7' component={TitlePage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
