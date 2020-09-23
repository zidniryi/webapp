import React, { Fragment } from 'react'

export const SideFloating = () => {
  return (
    <Fragment>
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
        <a href="#" class="linkedin">
          <i class="fas fa-map-marker-alt"></i>
        </a>
      </div>
    </Fragment>
  )
}
