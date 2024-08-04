import React from 'react'
import "./Shop.css"
import "../Products/Products.css"
import { FaCartShopping } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../Api/Api.css"
import products_JSON from '../Products/product';


function Shop({ fakeproducts , dummyproducts , addToCart }) {
  return ( 
    <div className='Shop Api Products container my-5'>

      {/* <Products/> */}

      <div className="row g-3">
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

      { fakeproducts.map((val , index)=>{
                return(
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                <div className='card p-3 border border-dark'>
                    <Link to={`${val.id}`}>
                        <img src={val.image} alt="" />
                    </Link>
                    <b className='fs-5'> {val.title.slice(0,10)} </b>
                    <div className='procces'>
                        <div>
                        <FaHeart />
                        </div>
                        <div onClick={()=>{addToCart( val )}} >
                        <FaCartShopping />
                        </div>
                    </div>
                </div>
            </div>
                )
            }) }
    { dummyproducts.map((val , index)=>{
                    return(
                <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                    <div className='card p-3 border border-dark'>
                        <Link to={`${val.id}`}>
                            <img src={val.thumbnail} alt="" />
                        </Link>
                        <b className='fs-5'> {val.title.slice(0,10)} </b>
                        <div className='procces'>
                            <div>
                            <FaHeart />
                            </div>
                            <div onClick={()=>{addToCart( val )}}>
                            <FaCartShopping />
                            </div>
                        </div>
                    </div>
                </div>
                    )
                }) }
      </div>

      
    </div>
  )
}

export default Shop
