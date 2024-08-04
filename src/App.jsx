import React, { useEffect, useState } from 'react'
import "./App.css"
import { BrowserRouter  , Routes , Route, Outlet } from "react-router-dom"
import Swal from 'sweetalert2'
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import FakeApi from './components/Api/FakeApi'
import FakeDetails from './components/Api/FakeDetails'
import Dummyapi from "./components/Api/DummyApi"
import DummyDetails from './components/Api/DummyDetails'
import axios from "axios"
import Cart from './components/Cart/Cart'
import Shop from './components/Shop/Shop'


function App() {

  let fakeapi = "https://fakestoreapi.com/products"
  let dummyapi = "https://dummyjson.com/products"

  let [ fakeproducts  , setFakeProducts] = useState([])
  let [ dummyproducts  , setDummyProducts] = useState([])

 async function getFakeProducts(){
    let {data} = await axios.get(fakeapi)
    setFakeProducts( data )
 }
 async function getDummyProducts(){
    let {data} = await axios.get(dummyapi)
    setDummyProducts( data.products  )
    
 }

 useEffect(()=>{
    getFakeProducts()
    getDummyProducts()
 } , [])





//  ----------------------------------------------
// cart

let [ cartItems , SetCartItems ] = useState([])

useEffect(()=>{
  if( localStorage.getItem("product") == null ){
     SetCartItems( [] )
  }else{
   SetCartItems( JSON.parse( localStorage.getItem("product") ) )
  }
} , [])


function addToCart(product){
  let selectedProduct = cartItems.find( item  => item.title == product.title )

  if( selectedProduct ){
    Swal.fire({
      title: `this product ( <span class='text-primary' >${ product.title.slice(0 , 10) }</span> ) is already addedd !!!`,
      text: "Good job!",
      icon: "info" ,
      showConfirmButton :  true ,
    });
  }else{
    
    Swal.fire({
      title: `product ( <span class='text-primary' >${ product.title.slice(0 , 10) }</span> ) is adedd succefully`,
      text: "Good job!",
      icon: "success" ,
      showConfirmButton :  false ,
      timer : 1500
  
    });
    SetCartItems( [...cartItems , {...product , amount : 1 }] )

  }
} 


function deleteFromCart(product , index){

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: `Are you sure toDelete ${ product.title }?  `,
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      cartItems.splice( index , 1 )
      SetCartItems([...cartItems])
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
      });
    }
  });

}

function increament(product){

  ++product.amount
  SetCartItems([...cartItems])

}


function decreament(product){

  if( product.amount > 1 ){
    --product.amount
    SetCartItems([...cartItems])
  }
  else{
    deleteFromCart(product)
  }


}


useEffect(()=>{

  localStorage.setItem("product" , JSON.stringify( cartItems ) )

 } ,  [cartItems] )







//  -----------------dark and light moood
let [dark , setDark] = useState(false)
function isDark(){
  setDark( !dark )
}


  return (
    <main className={ dark ? 'dark' : null }>
      

          <BrowserRouter >
            <Navbar cartItems={cartItems} isDark={isDark} />
          
          <Routes>
            <Route  path='' element={ <Home addToCart={addToCart} /> }  />
            <Route  path='about' element={ <About /> }  />
            <Route  path='contact' element={ <Contact /> }  />
            <Route  path='shop' element={ <Shop fakeproducts={fakeproducts} dummyproducts={dummyproducts}  addToCart={addToCart} /> }  />

            <Route path='fakeapi' element={ <Outlet/> } >
                <Route path='' element={<FakeApi fakeproducts={fakeproducts} addToCart={addToCart} />} />
                <Route path=':productId' element={ <FakeDetails addToCart={addToCart}/> }  />
            </Route>

            <Route  path='dummyapi' element={ <Outlet /> } >
                <Route  path='' element={<Dummyapi dummyproducts={dummyproducts} addToCart={addToCart}/>} /> 
                <Route  path=':productId' element={ <DummyDetails addToCart={addToCart}/> } /> 
            </Route>


          <Route path='cart' element={ <Cart cartItems={cartItems} deleteFromCart={deleteFromCart} increament={increament}  decreament={decreament}  /> } />


          </Routes>
          
          
            <Footer />
          </BrowserRouter>


    </main>
  )
}

export default App
