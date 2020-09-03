import React, { Fragment } from 'react'
const NavBar = () => {
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg mb-4 top-bar navbar-static-top sps
      sps--abv"
      >
        <div className="container">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse1"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand mx-auto" href="#">
            Gra<span>freez</span>
          </a>
          <div className="collapse navbar-collapse" id="navbarCollapse1">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                {' '}
                <a className="nav-link" href="#myCarousel">
                  Home
                  <span className="sr-only">(current)</span>
                </a>{' '}
              </li>

              <li className="nav-item dropdown">
                <a
                  id="dropdownMenu1"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="nav-link
                dropdown-toggle"
                >
                  About Us
                </a>
                <ul
                  aria-labelledby="dropdownMenu1"
                  className="dropdown-menu border-0
                shadow"
                >
                  <li>
                    <a href="./about_company.html" className="dropdown-item">
                      Company Profile{' '}
                    </a>
                  </li>
                  <li>
                    <a href="./visi.html" className="dropdown-item">
                      Visi Misi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Customer
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown has-megamenu">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  {' '}
                  Mega menu{' '}
                </a>
                <div className="dropdown-menu megamenu">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="col-megamenu">
                        <h6 className="title">Title Menu Satu</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a href="./product_cards.html">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="col-megamenu">
                        <h6 className="title">Title Menu Two</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="col-megamenu">
                        <h6 className="title">Title Menu Three</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="col-megamenu">
                        <h6 className="title">Title Menu Four</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <hr />
                      <div className="col-megamenu">
                        <h6 className="title">Title Menu Five</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  id="dropdownMenu1"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="nav-link
                dropdown-toggle"
                >
                  Service
                </a>
                <ul
                  aria-labelledby="dropdownMenu1"
                  className="dropdown-menu border-0
                shadow"
                >
                  <li>
                    <a href="#" className="dropdown-item">
                      CTS{' '}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      REPAIR
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                {' '}
                <a className="nav-link" href="#contact">
                  E-Catalog
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  id="dropdownMenu1"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="nav-link
                dropdown-toggle"
                >
                  Event
                </a>
                <ul
                  aria-labelledby="dropdownMenu1"
                  className="dropdown-menu border-0
                shadow"
                >
                  <li>
                    <a href="./galery.html" className="dropdown-item">
                      Galeri 1{' '}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Galeri 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {' '}
                <a className="nav-link" href="./contact.html">
                  Contact US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default NavBar
