import React from 'react'
import "./Cart.css"
import img from "../../assets/images/download (2).jpeg"

function Cart({cartItems , deleteFromCart , increament ,  decreament }) {

  console.log( cartItems );
  let totall = 0
  return (
    <div className='Cart container my-5'>

      <div className="row gy-3">

    { cartItems.length > 0 ? 
    
    <>
      { cartItems.map((value , index)=>{
        { totall += value.price * value.amount }
        return(
        <div className="col-lg-12" key={index}>
          <div className='singlepro p-3'>
              <p className='fs-4'> { value.title.slice(0,10) } </p>
              <img src={ value.image || value.thumbnail || value.img } alt="" />
              <div>
                <p> product Price : ${ value.price } </p>
                <p className='fw-bold'> totall Price : ${ Math.round((value.price * value.amount))  }</p>
              </div>
              <div className='count'>
                <button onClick={()=>{ increament( value ) }}>+</button>
                <span> { value.amount } </span>
                <button onClick={()=>{ decreament( value ) }}>-</button>
              </div>
              <button onClick={()=>{ deleteFromCart( value , index ) }} className='btn btn-danger'> Remove From Cart </button>
          </div>
        </div>
        )
      }) }

        <div className="col-lg-8 mx-auto sticky-bottom">
          <div className="totall p-4 ">
            <b> Totall : </b>
            <b> ${ totall.toFixed(3) } </b>
          </div>
        </div>
    
    </>

    
    :
    
    <div className='p-5 text-center text-danger fs-1 fw-bold'>
      THERE IS NO PRODUCTS IN YOUR CART
    </div>
    
    }



      </div>
      
    </div>
  )
}

export default Cart
