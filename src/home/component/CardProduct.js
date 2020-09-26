import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const CardProduct = () => {
  return (
    <Fragment>
      <div class="col-md-4">
        <div class="card rounded">
          <div class="card-image">
            <img
              class="img-fluid"
              src="https://www.costex.com/wp-content/uploads/2019/12/abc-gasket-kits-header-1-1536x768.jpg"
              alt="Alternate Text"
              style={{ alignSelf: 'center' }}
            />
          </div>
          <div class="card-image-overlay m-auto">
            <p>
              The ABC GASKET KITS program is designed to consolidate popular
              gaskets and make it easy to order.
            </p>
          </div>
          <div class="card-body text-center">
            <Link class="ad-btn" to="detail-product">
              Lihat
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
