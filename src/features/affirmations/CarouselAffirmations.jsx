import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";
import { useState } from "react";

function CarouselAffirmations({ affirm }) {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrow: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
  };
  CarouselAffirmations.propTypes = {
    affirm: PropTypes.string.isRequired,
  };
  return (
    <>
      <div className=" overflow-hidden py-24 text-center  ">
        <Slider ref={setSliderRef} {...sliderSettings}>
          {affirm.slice(0, 10).map((element) => (
            <div className="rounded-2xl border-2 p-20" key={element.id}>
              <h2> {element.affirmations}</h2>
            </div>
          ))}{" "}
        </Slider>
      </div>
      <div className="flex items-center justify-center ">
        <button
          className="m-8 h-28 w-28 rounded-xl border-2 border-red-100 p-4 text-red-900 !outline-none hover:shadow-xl "
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

export default CarouselAffirmations;
