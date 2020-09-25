import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

export const SideFloating = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })

  return (
    <Fragment>
      {isTabletOrMobile || isTabletOrMobileDevice ? (
        <aside class="social-sharing" style={{ zIndex: 10 }}>
          <Link to="/form-contact" class="twitter">
            <i class="far fa-envelope" style={{ width: 20 }}></i>
          </Link>
          <a href="#" class="google">
            <i class="fas fa-phone-volume" style={{ width: 20 }}></i>
          </a>
          <a
            href=" https://api.whatsapp.com/send?phone=6281933357030&text=Saya%20tertarik%20untuk%20berlangganan%20KIRIM.EMAIL"
            class="whatsapp"
          >
            <i
              class="fab fa-whatsapp"
              aria-hidden="true"
              style={{ width: 20 }}
            ></i>
          </a>
          <Link to="/contact" class="linkedin">
            <i class="fas fa-map-marker-alt" style={{ width: 20 }}></i>
          </Link>
        </aside>
      ) : (
        <div class="float-sm">
          <div class="fl-fl float-fb">
            <i class="fa fa-envelope"></i>
            <Link to="/form-contact" target="_blank">
              {' '}
              Contact Us
            </Link>
          </div>
          <div class="fl-fl float-tw">
            <i class="fa fa-phone"></i>
            <a href="" target="_blank">
              08484416412
            </a>
          </div>
          <div class="fl-fl float-gp">
            <i class="fab fa-whatsapp"></i>
            <a
              href=" https://api.whatsapp.com/send?phone=6281933357030&text=Saya%20tertarik%20untuk%20berlangganan%20KIRIM.EMAIL"
              target="_blank"
            >
              WhatsApp Us
            </a>
          </div>
          <div class="fl-fl float-rs">
            <i class="fas fa-map-marker-alt"></i>
            <Link to="/contact">Find Us</Link>
          </div>
        </div>
      )}
    </Fragment>
  )
}
