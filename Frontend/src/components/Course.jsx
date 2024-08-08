import React from "react";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Card from "./Card";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3001/book");
        const data = list.filter((data) => data.category === "free");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

 
 

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Course</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non sunt
            natus vero. Ad odit corrupti cumque laudantium ullam inventore eum
            quae eius veritatis.
          </p>
        </div>

        <div>
          <div className="slider-container">
            <Slider {...settings}>
              {book.map((item) => (
                <Card item={item} key={item.id}></Card>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
