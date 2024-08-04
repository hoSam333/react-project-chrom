import React from 'react'
import "./Slider2.css"
import img_1 from "../../assets/images/vendor-7-BBAmhwW7 (1).jpg"
import img_2 from "../../assets/images/vendor-6-CmmiMxIm.jpg"
import img_3 from "../../assets/images/download (1).jpeg"
import img_4 from "../../assets/images/download (2).jpeg"
import img_5 from "../../assets/images/download.jpeg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Slider2() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1 , 
    arrows :  false , 
    autoplay : true  , 
    autoplaySpeed: 1000 ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]

  };
  return (
    <div className='Slider2 container'>

        <Slider {...settings} className='sliding'>

          <div>
            <img src={img_1} alt="" />
          </div>
          <div>
            <img src={img_2} alt="" />
          </div>
          <div>
            <img src={img_3} alt="" />
          </div>
          <div>
            <img src={img_4} alt="" />
          </div>
          <div>
            <img src={img_5} alt="" />
          </div>

        </Slider>
      
    </div>
  )
}

export default Slider2
