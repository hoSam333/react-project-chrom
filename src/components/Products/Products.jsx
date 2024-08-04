import React from 'react'
import "./Products.css"
import img from "../../assets/images/product-1-Eqx8spQ9.jpg"
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import products_JSON from './product';

function Products({addToCart}) {


  return (
    <div className='Products container my-5'>

        <div className="row g-2">


          {products_JSON.map(( val , index )=>{
            return(

          <div className="col-lg-3 col-md-6 col-sm-12 " key={index}>
            <div className="one">
              <div className='card_img'>
                <img src={val.img} alt="" />
              </div>
              <div className='details'>
                <h3 className='card_title'> {val.title}</h3>
                <p> ${val.price} <del> $${val.sale} </del> </p>
                <div className='star'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className='procces'>
                    <div>
                      <FaHeart />
                    </div>
                    <div onClick={ ()=>{ addToCart( val ) } }>
                      <FaCartShopping />
                    </div>
                </div>
              </div>
            </div>
          </div>

            )
          })}



        </div>
      
    </div>
  )
}

export default Products
