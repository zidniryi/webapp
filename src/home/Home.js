import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Floating from '../components/Floating'

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Slider />

      <section className="service-sec" id="benefits">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading">
                <h2>
                  <small>Benefits of Exercise</small>To enjoy the glow of good
                  health, you must exercise
                </h2>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6 text-sm-center service-block">
                  {' '}
                  <i
                    className="fa
                  fa-plus"
                    aria-hidden="true"
                  ></i>
                  <h3>Better Sleep</h3>
                  <p>
                    Never in all their history have men been able truly to
                    conceive of the world as one: a single sphere, a globe,
                    having the qualities of a globe.
                  </p>
                </div>
                <div className="col-md-6 text-sm-center service-block">
                  {' '}
                  <i
                    className="fa
                  fa-leaf"
                    aria-hidden="true"
                  ></i>
                  <h3>Reduces Weight</h3>
                  <p>
                    Never in all their history have men been able truly to
                    conceive of the world as one: a single sphere, a globe,
                    having the qualities of a globe.
                  </p>
                </div>
                <div className="col-md-6 text-sm-center service-block">
                  {' '}
                  <i
                    className="fa
                  fa-leaf"
                    aria-hidden="true"
                  ></i>
                  <h3>Improves Mood</h3>
                  <p>
                    Never in all their history have men been able truly to
                    conceive of the world as one: a single sphere, a globe,
                    having the qualities of a globe.
                  </p>
                </div>
                <div className="col-md-6 text-sm-center service-block">
                  {' '}
                  <i
                    className="fa
                  fa-bell"
                    aria-hidden="true"
                  ></i>
                  <h3>Boosts Energy</h3>
                  <p>
                    Never in all their history have men been able truly to
                    conceive of the world as one: a single sphere, a globe,
                    having the qualities of a globe.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              {' '}
              <img
                src="http://grafreez.com/wp-content/temp_demos/burnout/img/side-01.jpg"
                className="img-fluid"
              />{' '}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Floating />
    </Fragment>
  )
}

export default Home

// import React, { Component } from 'react'

// export default class Home extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0,
//     }
//   }

//   // For Add Count
//   onCount = () => {
//     this.setState({ count: this.state.count + 1 })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Count On State</h1>
//         <p>Count On Plus : {this.state.count}</p>
//         <button onClick={this.onCount}>Count On Me</button>
//       </div>
//     )
//   }
// }

// import React, { useState } from 'react'

// const Home = () => {
//   const [count, setCount] = useState(0)

//   const onCount = () => {
//     setCount(count + 1)
//   }
//   return (
//     <div>
//       <h1>Count On State</h1>
//       <p>Count On Plus : {count}</p>
//       <button onClick={onCount}>Count On Me</button>
//     </div>
//   )
// }
// export default Home
