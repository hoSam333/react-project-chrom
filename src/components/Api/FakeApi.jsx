import React from 'react'
import "./Api.css"
import img from "../../assets/images/offer-2-Cly2vTNH.jpg"
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function FakeApi({fakeproducts , addToCart}) {
    
  return (
    <div className='Api container my-5'>

        <p className='h1 text-center'> Fake Api Products </p>

        <p className='text-center my-4 w-75 mx-auto fs-5 opacity-50 fw-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sint dicta provident corporis hic esse porro accusantium ullam. Consectetur id mollitia ipsa tenetur sequi exercitationem facere rem itaque error! Velit!</p>

        <div className="row g-3">
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
        </div>
      
    </div>
  )
}

export default FakeApi
