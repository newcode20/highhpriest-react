import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function ImageCarousel({ images }) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true
  };
  console.log(images);
  return (
  <div>
    <Slider {...settings}>
      {images.map((item) => (
        <div key={item.id}>
          <img src={item.imageUrl}  alt={item.alt} />
        </div>
      ))}
    </Slider>
  </div>
);
}