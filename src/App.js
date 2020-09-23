import React, { Fragment, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home/Home'
import Contact from './contact/Contact'
import Gallery from './gallery/Gallery'
import About from './about/About'
import Product from './product/Product'
import Visi from './Visi/Visi'
import Catalog from './catalagog/Catalog'
import PdfViewer from './pdfViewer/PdfViewer'
import ServiceCTP from './service'
import Customer from './customer/Customer'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path={'/'} component={Home} />
        </Switch>
        <Route exact path={'/contact'} component={Contact} />
        <Route exact path={'/gallery'} component={Gallery} />
        <Route exact path={'/about'} component={About} />
        <Route exact path={'/product'} component={Product} />
        <Route exact path={'/visi'} component={Visi} />
        <Route exact path={'/galerry'} component={Gallery} />
        <Route exact path={'/catalog'} component={Catalog} />
        <Route exact path={'/pdf'} component={PdfViewer} />
        <Route exact path={'/service-ctp'} component={ServiceCTP} />
        <Route exact path={'/customer'} component={Customer} />
      </Fragment>
    </Router>
  )
}

export default App
