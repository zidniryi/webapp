import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const ProductDetail = (props) => {
  return (
    <Fragment>
      <NavBar />
      <div class="container" style={{ marginTop: 100 }}>
        <h1 class="my-4">UCR Berco</h1>

        <div class="row">
          <div class="col-md-8">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/20daea2d-811a-4289-adae-4195309ebf37/Slider1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200926T144153Z&X-Amz-Expires=86400&X-Amz-Signature=156e63f4ffa444893abf5c37cc98a14e56189beebf1f6407313599e159f6b081&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Slider1.jpg%22"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b0ecfa07-e868-4355-a2ce-2d457a5c3daa/Slider2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200926T144241Z&X-Amz-Expires=86400&X-Amz-Signature=c9bdf0d6f505888cb0673ed7d26e9e17c0d6a3297c9561012c695795efb2c102&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Slider2.jpg%22"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5fafc5e4-00ce-461e-a0cc-2d0a42331113/Slider3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200926T144300Z&X-Amz-Expires=86400&X-Amz-Signature=6046b18274908ab2d0ebe70bd1d1b0f0e30e822149e71c0169da9f76a8f6ba82&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Slider3.jpg%22"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div class="col-md-4">
            <h3 class="my-3">Project Description</h3>
            <p>
              Berco is know for superior engineering & technology. Innovation,
              comprehensive know how and state of the art manufacturing. Nearing
              100 years of leadership & research makes Berco undercarriage the
              reference focal point in the field of construction equipment.
              Berco products are made to perform under low & high temperature
              versions of extreme applications and are unrivaled in terms of
              wear resistance, durability & technical content.
            </p>
            <h3 class="my-3">Project Details</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Dolor Sit Amet</li>
              <li>Consectetur</li>
              <li>Adipiscing Elit</li>
            </ul>
          </div>
        </div>
        <hr />
        <h3 class="my-4">The Product</h3>
        <div class="row">
          <div class="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img
                class="img-fluid"
                src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/798d2ba7-f952-4db8-9274-909dbe967702/1berco.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200926T150354Z&X-Amz-Expires=86400&X-Amz-Signature=e06aa20880ff98c7f515760be8de7b5684980df779145e24d90ce1cf75c6600d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%221berco.jpg%22"
                alt=""
              />
            </a>
          </div>

          <div class="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img
                class="img-fluid"
                src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/21eb174b-07b9-48ab-a085-9b220fbe774a/Logo_NR.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200926T150430Z&X-Amz-Expires=86400&X-Amz-Signature=3c2651d74af86491c1146f7b662264e6f2ed3c3c5f003cb126201f46c265bf0f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Logo_NR.jpg%22"
                alt=""
              />
            </a>
          </div>

          <div class="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img
                class="img-fluid"
                src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5f67321b-04ca-4839-96e5-86a4a14a9145/OFM_LOGO.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200926T150453Z&X-Amz-Expires=86400&X-Amz-Signature=3e054748294b3f5c6671ae0977e48c132db26bf256bbe182b9b48791cd3f211b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22OFM_LOGO.png%22"
                alt=""
              />
            </a>
          </div>

          <div class="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img
                class="img-fluid"
                src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8cd86172-4c98-4a67-b43d-58474e73ce93/GET.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200926T150534Z&X-Amz-Expires=86400&X-Amz-Signature=f83a26fa66c1d68e42187d782b529b891a68b1caa4fc0211c8454628880e1851&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22GET.jpg%22"
                alt=""
              />
            </a>
          </div>

          <div class="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img
                class="img-fluid"
                src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/06bb6523-39e8-48e8-81a9-462b2c89fc2f/others.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200926T150628Z&X-Amz-Expires=86400&X-Amz-Signature=e024bacfd4a03f19ae8b8357b508d05cf3e7d3b94f4c94ab7f26d3ccc3de5269&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22others.jpg%22"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

ProductDetail.propTypes = {}

export default ProductDetail
