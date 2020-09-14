import React, { Fragment, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home/Home'
import Contact from './contact/Contact'
import Gallery from './gallery/Gallery'
import About from './about/About'
import Product from './product/Product'
import Visi from './Visi/Visi'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/contact'} component={Contact} />
        <Route exact path={'/gallery'} component={Gallery} />
        <Route exact path={'/about'} component={About} />
        <Route exact path={'/product'} component={Product} />
        <Route exact path={'/visi'} component={Visi} />
        <Route exact path={'/galerry'} component={Gallery} />
      </Fragment>
    </Router>
  )
}

export default App
