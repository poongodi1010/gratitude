/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";
import { useState } from "react";

export default function Carousel({ keywordQuote }) {
  const [sliderRef, setSliderRef] = useState(null);
  //const [count, setCount] = useState(0);

  const sliderSettings = {
    arrow: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    // slidesToStop: 10,
    // dots: true,
  };
  // let count = 0;
  // function handleStop() {
  //   console.log("inside func", count);

  //   setCount(count + 1);

  //   if (count == 10) {
  //     setCount(0);
  //   }
  // }

  return (
    <>
      <div className=" overflow-hidden py-24 text-center">
        <Slider ref={setSliderRef} {...sliderSettings}>
          {/* <ul> */}
          {keywordQuote.slice(0, 10).map((element) => (
            <div className="rounded-2xl border-2 p-20" key={element.a}>
              <h2> {element.q}</h2>
            </div>
          ))}
          {/* </ul> */}
        </Slider>
      </div>
      <div className="flex items-center justify-center ">
        <button
          className="m-8 h-28 w-28  rounded-xl border-2 border-red-100 p-4 text-red-900 !outline-none hover:shadow-xl"
          onClick={sliderRef?.slickPrev}
        >
          <HiArrowLeftCircle className="inline-block h-20 w-20" />
        </button>
        <button
          className="m-8 h-28 w-28 rounded-xl border-2 border-red-100 p-4 text-red-900 !outline-none hover:shadow-xl"
          onClick={sliderRef?.slickNext}
        >
          <HiArrowRightCircle className="inline-block h-20 w-20" />
        </button>
      </div>
    </>
  );
}
