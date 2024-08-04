import React from 'react'
import "./Services.css"
import { FaCheck } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";

function Services() {
  return (
    <div className='Services container '>

        <div className="row g-3">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className='ser'>
              <FaCheck className='icon' />
              <span>Quality Product</span>
            </div>
          </div> 
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className='ser'>
              <FaTruck className='icon' />
              <span>
              Free Shipping</span>
            </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className='ser'>
                <FaCheck className='icon' />
                <span>
                14-Day Return</span>
              </div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className='ser'>
                  <FaCheck className='icon' />
                  <span>
                  24/7 Support</span>
                </div>

            </div>
          </div>

    </div>
      
  )
}

export default Services
