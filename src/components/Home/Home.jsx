import React from 'react'
import "./Home.css"
import Header from "../Header/Header"
import Services from '../Services/Services'
import Categories from '../Categories/Categories'
import Products from '../Products/Products'
import Slider2 from '../Slider2/Slider2'


function Home({addToCart}) {
  return (
    <div>

        <Header />
        <Services />
        <Categories /> 
        <Products addToCart={addToCart} />
        <Slider2 />
        
    </div>
  )
}

export default Home
