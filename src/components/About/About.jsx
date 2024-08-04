import React from 'react'
import img from "../../assets/images/about.jpg"
import "./About.css"

function About() {
  return (
    <div className='About container my-5'>
      <h2 className='component_title fs-2 text-center mb-5'> About <span> Us </span>  </h2>
      <div className="row">

        <div className="col-lg-5">
          <div>
            <img src={img} alt="" className='w-100' />
          </div>
        </div>
        <div className="col-lg-7">
          <div className='details'>
            <b className='fs-3'>Welcome To  <span>Bravo Shop</span> </b>
            <p className='opacity-50'> <span>Bravo Shop</span> is Best online Shopping Company Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita dolore omnis cumque ipsa vel nam non necessitatibus eius, molestiae officiis, rem et distinctio? Nisi voluptates amet in aliquam sapiente. </p>
            <button className='btn btn-primary'>Shop Now</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
