// components/OurWorkSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurWorkSlider = () => {
  const sliderItems = [
    {
      img: "https://companieslogo.com/img/orig/RAYMOND.NS_BIG-02a3e63e.png?t=1746330008",
      title: "Raymond",
    },
    {
      img: "https://media.licdn.com/dms/image/v2/D4E12AQEDN8fGO-A7xw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1715737739642?e=2147483647&v=beta&t=jsyiZgze_LRSL-3wD4577geblktDLQwi-gG7DmjEGMM",
      title: "Allen Solly",
    },
    {
      img: "https://thecapitalmall.com/wp-content/uploads/2023/10/Peter-England-Capital-Mall.png",
      title: "Peter England",
    },
    {
      img: "https://utkalgalleria.com/wp-content/uploads/2023/08/Louis-Philippe.webp",
      title: "Louis Philippe",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnj2soIWc2s7I4mQBKyqgYvcxVq1-5UqTpQ&s",
      title: "Blackberrys",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
      breakpoint: 992, // Tablet
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768, // Mobile
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480, // Small mobile
      settings: {
        slidesToShow: 1,
      },
    },
    ],
  };

  return (
    <section className="py-4">
      <div className="container">
        <Slider {...settings}>
          {sliderItems.map((item, index) => (
            <div key={index} className="px-3">
              <div className="brand-card ">
                <img
                  src={item.img}
                  alt={item.title}
                  className="brand-logo"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurWorkSlider;
