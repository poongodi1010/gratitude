// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";
import { useState } from "react";

function CarouselAffirmations({ affirm }) {
  const [sliderRef, setSliderRef] = useState(null);
  //const [count] = useState(1);

  // function handleClick() {
  //   () => setCount((c) => c + 1);
  // }
  //   const settings = {
  //     dots: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     infinite: true,
  //     autoplay: true,
  //     autoplaySpeed: 1000,
  //   };
  const sliderSettings = {
    arrow: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    // slidesToStop: 10,
    // dots: true,
  };
  CarouselAffirmations.propTypes = {
    affirm: PropTypes.string.isRequired,
  };
  return (
    // <div className="content">
    //   <h1 className="header">Afro Styles Fashion Store</h1>
    //   <div className="container">
    //     <Slider {...settings}>{affirm.map((item) => item.affirmations)}</Slider>
    //   </div>
    // </div>
    // <p>{affirm.affirmations}</p>
    <>
      <div className=" overflow-hidden py-24 text-center  ">
        <Slider ref={setSliderRef} {...sliderSettings}>
          {/* <ul> */}
          {affirm.slice(0, 10).map((element) => (
            <div className="rounded-2xl border-2 p-20" key={element.id}>
              <h2> {element.affirmations}</h2>
            </div>
          ))}{" "}
          {/* </ul> */}
        </Slider>
      </div>
      <div className="flex items-center justify-center ">
        <button
          className="m-8 h-28 w-28 rounded-xl border-2 border-red-100 p-4 text-red-900 !outline-none hover:shadow-xl "
          onClick={sliderRef?.slickPrev}
          //disabled={`${count === 1}`}
        >
          <HiArrowLeftCircle
            className="inline-block h-20 w-20"
            // disbled={count === 1}
            // onClick={handleClick}
          />
        </button>
        <button
          className="m-8 h-28 w-28 rounded-xl border-2 border-red-100 p-4 text-red-900 !outline-none hover:shadow-xl"
          onClick={sliderRef?.slickNext}
          //disabled={`${count === 10}`}
        >
          <HiArrowRightCircle
            className="inline-block h-20 w-20"
            // disbled={count === 10}
          />
        </button>
      </div>
    </>
  );
}

export default CarouselAffirmations;
