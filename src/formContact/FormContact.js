import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../components/NavBar'

const FormContact = (props) => {
  return (
    <Fragment>
      <NavBar />
      <div className="body-form" style={{ marginTop: 100 + 'px' }}>
        <div class="container contact-form">
          <div class="contact-image">
            <img
              src="https://image.ibb.co/kUagtU/rocket_contact.png"
              alt="rocket_contact"
            />
          </div>
          <form method="post">
            <h3 style={{ color: 'white', fontWeight: 'bold' }}>
              Drop Us a Message
              <p>Lorem Ipsum Dolor Amet</p>
            </h3>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    name="txtName"
                    class="form-control"
                    placeholder="Your Name *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtEmail"
                    class="form-control"
                    placeholder="Your Email *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtPhone"
                    class="form-control"
                    placeholder="Your Phone Number *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    name="btnSubmit"
                    class="btnSubmit"
                    value="Send Message"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea
                    name="txtMsg"
                    class="form-control"
                    placeholder="Your Message *"
                    style={{ width: 100 + '%', height: 150 + 'px' }}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

FormContact.propTypes = {}

export default FormContact
