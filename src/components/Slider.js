import React, { Fragment } from 'react'
const background =
  'https://cdn.pixabay.com/photo/2017/08/06/00/27/yoga-2587066_960_720.jpg'

const Slider = () => {
  return (
    <Fragment>
      <div className="swiper-container main-slider" id="myCarousel">
        <div className="swiper-wrapper">
          <div
            className="swiper-slide slider-bg-position"
            style={{ backgroundImage: `url(${background})` }}
            data-hash="slide1"
          >
            <h2>
              It is health that is real wealth and not pieces of gold and silver
            </h2>
          </div>
          <div
            className="swiper-slide slider-bg-position"
            style={{ backgroundImage: `url(${background})` }}
            data-hash="slide2"
          >
            <h2>Happiness is nothing more than good health and a bad memory</h2>
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev">
          <i className="fa fa-chevron-left"></i>
        </div>
        <div className="swiper-button-next">
          <i className="fa fa-chevron-right"></i>
        </div>
      </div>
    </Fragment>
  )
}

export default Slider
