import React from 'react'
import "./Header.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Header() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1 , 
    arrows :  false , 
    autoplay : true  , 
    autoplaySpeed: 1500 ,
    fade : true
  };
  return (
    <div className='Header container my-5'>

        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <Slider {...settings} className='sliderr' >
                <div className="mens">
                  <div>
                    <b> Mens Fashone </b>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptas? Praesentium adipisci, nulla quisquam earum modi atque placeat veniam quod? Et, sint architecto repellat ratione a ea quisquam eos. Delectus.</p>
                    <button> Shop Now </button>
                  </div>
                </div>
                <div className="women">
                  <div>
                    <b> Womens Fashone </b>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptas? Praesentium adipisci, nulla quisquam earum modi atque placeat veniam quod? Et, sint architecto repellat ratione a ea quisquam eos. Delectus.</p>
                    <button> Shop Now </button>
                  </div>
                </div>
                <div className="kids">
                  <div>
                    <b> Kids Fashone </b>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptas? Praesentium adipisci, nulla quisquam earum modi atque placeat veniam quod? Et, sint architecto repellat ratione a ea quisquam eos. Delectus.</p>
                    <button> Shop Now </button>
                  </div>
                </div>
            </Slider>
          </div>
          <div className="col-lg-4 .col-sm-12">
            <div className='right'>
                <div className='one'>
                    <p> save 20% </p>
                    <b>spcial offer</b>
                    <button> Shop Now </button>
                </div>
                <div className='two'>
                    <p> save 20% </p>
                    <b>spcial offer</b>
                    <button> Shop Now </button>
                </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Header
