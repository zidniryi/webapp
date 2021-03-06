import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Visi = () => {
  return (
    <Fragment>
      <NavBar />
      <div
        className="container"
        style={{ marginTop: 100 + 'px', marginBottom: 100 + 'px' }}
      >
        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Our Mission & Vision :
        </h2>
        <hr />
        <div class="row">
          <div class="col bg">
            <b> Our Mission & Vision :</b>
            <p>
              Memberikan layanan terbaik dalam hal pengadaan suku cadang untuk
              alat berat dengan harga yang kompetitif dan juga warranty untuk
              mencapai CPH dengan kualitas produk terbaik dan juga memegang
              tanggung jawab pekerjaan karena kepuasan klien kami adalah
              prioritas utama kami.
            </p>
          </div>
          <div class="col bg">
            <img
              src="https://www.trakindo.co.id/sites/default/files/inline-images/day1trakindo_0173.jpg"
              alt=""
              width="80%"
            />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Visi
