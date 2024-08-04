import React from 'react'
import "./Categories.css"
import cat_1 from "../../assets/images/cat-1-Dff_xs0d (1).jpg"
import cat_2 from "../../assets/images/cat-2-DuslB7R8.jpg"
import cat_3 from "../../assets/images/cat-3-CeSXsjz-.jpg"
import cat_4 from "../../assets/images/cat-4-Df4eiVwg (1).jpg"

function Categories() {
  return (
    <div className='Categories container my-5'>

      <h2 className='sec-title text-center mb-5'> Categories </h2>
      
      <div className="row g-2">

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='one'>
              <img src={cat_1} alt="" />
              <div>
                <p>Category Name</p>
                <span>100 Products</span>
              </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='one'>
              <img src={cat_2} alt="" />
              <div>
                <p>Category Name</p>
                <span>100 Products</span>
              </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='one'>
              <img src={cat_3} alt="" />
              <div>
                <p>Category Name</p>
                <span>100 Products</span>
              </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='one'>
              <img src={cat_4} alt="" />
              <div>
                <p>Category Name</p>
                <span>100 Products</span>
              </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='one'>
              <img src={cat_1} alt="" />
              <div>
                <p>Category Name</p>
                <span>100 Products</span>
              </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='one'>
              <img src={cat_2} alt="" />
              <div>
                <p>Category Name</p>
                <span>100 Products</span>
              </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='one'>
              <img src={cat_3} alt="" />
              <div>
                <p>Category Name</p>
                <span>100 Products</span>
              </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='one'>
              <img src={cat_4} alt="" />
              <div>
                <p>Category Name</p>
                <span>100 Products</span>
              </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='one'>
              <img src={cat_1} alt="" />
              <div>
                <p>Category Name</p>
                <span>100 Products</span>
              </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='one'>
              <img src={cat_2} alt="" />
              <div>
                <p>Category Name</p>
                <span>100 Products</span>
              </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='one'>
              <img src={cat_3} alt="" />
              <div>
                <p>Category Name</p>
                <span>100 Products</span>
              </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='one'>
              <img src={cat_4} alt="" />
              <div>
                <p>Category Name</p>
                <span>100 Products</span>
              </div>
          </div>
        </div>

      </div>
        
      
    </div>
  )
}

export default Categories
