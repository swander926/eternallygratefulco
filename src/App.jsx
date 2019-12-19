import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import MineralsPage from './pages/MineralsPage'
import PinsPage from './pages/PinsPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header>
        <h1 className="title">Eternally Grateful Co.</h1>
        <nav className="constantNavContainer">
          <ul className="constantNav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Minerals">Minerals</Link>
            </li>
            <li>
              <Link to="/Pins">Pins</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/Minerals" component={MineralsPage}></Route>
        <Route exact path="/Pins" component={PinsPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
