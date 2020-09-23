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
          <a href="#" class="twitter">
            <i class="far fa-envelope"></i>
          </a>
          <a href="#" class="google">
            <i class="fas fa-phone-volume"></i>
          </a>
          <a
            href=" https://api.whatsapp.com/send?phone=6281933357030&text=Saya%20tertarik%20untuk%20berlangganan%20KIRIM.EMAIL"
            class="whatsapp"
          >
            <i class="fab fa-whatsapp" aria-hidden="true"></i>
          </a>
          <Link to="/contact" class="linkedin">
            <i class="fas fa-map-marker-alt"></i>
          </Link>
        </aside>
      ) : (
        <div class="icon-bar" style={{ zIndex: 10 }}>
          <a href="#" class="twitter">
            <i class="far fa-envelope"></i>
          </a>
          <a href="#" class="google">
            <i class="fas fa-phone-volume"></i>
          </a>
          <a
            href=" https://api.whatsapp.com/send?phone=6281933357030&text=Saya%20tertarik%20untuk%20berlangganan%20KIRIM.EMAIL"
            class="whatsapp"
          >
            <i class="fab fa-whatsapp" aria-hidden="true"></i>
          </a>
          <Link to="/contact" class="linkedin">
            <i class="fas fa-map-marker-alt"></i>
          </Link>
        </div>
      )}
    </Fragment>
  )
}
