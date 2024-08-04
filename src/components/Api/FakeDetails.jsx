import axios from 'axios'
import "./Api.css"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import img from "../../assets/images/product-8-BigTxgyV (1).jpg"

function FakeDetails({addToCart}) {

    let {productId} = useParams()
    let ApiDetails = `https://fakestoreapi.com/products/${productId}`

    let [details , setDetails] = useState({})
   async function getDetails(){
        let {data} = await axios.get( ApiDetails )
        setDetails( data )
    }
    useEffect(()=>{
        getDetails()
    } , [])

    

  return (
    <div className='Details container my-5'>
        
    <div className="row">
        <div className="col-lg-5">
            <div className='card_img '>
                <img src={details.image} alt="" />
            </div>
        </div>
        <div className="col-lg-7">
            <div className='det p-4'>
                <b className='fs-3 text-center'> ({details.category}) </b>
                <b className='fs-4'> Product name : { details.title } </b>
                <p> {details.description} </p>
                <b className='text-success fs-3'> price : ${ details.price } </b>
                <button onClick={()=>{addToCart( details )}}> Add To Cart </button>
            </div>
        </div>
    </div>

    </div>
  )
}

export default FakeDetails
