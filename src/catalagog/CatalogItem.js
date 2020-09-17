import React, { Fragment } from 'react'

const CatalogItem = () => {
  return (
    <Fragment>
      <div className="col-sm-4 py-2">
        <div className="card text-white bg-primary">
          <div className="card-body">
            <h3 className="card-title">Hello</h3>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-outline-light">
              Lihat Catalog <i className="fa fa-eye" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CatalogItem
