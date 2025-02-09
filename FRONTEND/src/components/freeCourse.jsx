import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Card from "./Cards";

function Course() {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl  container mx-auto md:px-20 px-4 pt-10">
        <div>
          <h1 className="text-2xl text-white-400 font-bold">
            Free Offered Courses 😃
          </h1>
          <p className="pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            officiis voluptatem dolores tempora. Dolorum hic neque perspiciatis
            vitae, minus optio maiores veritatis delectus, nisi eum ab. Nihil
            autem maxime optio.
          </p>
        </div>
        <div className="mt-10">
          <div className="slider-container">
            <Slider {...settings}>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
