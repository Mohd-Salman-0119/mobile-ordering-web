import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { posterSlider } from "../constants/constants";

const PosterSlider = () => {
  return (
    <Swiper
      breakpoints={{
        768: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
      }}
      spaceBetween={5}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
      }}
      loop={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper z-40 my-3"
    >
      {posterSlider?.map((banner, index) => (
        <SwiperSlide key={index} className="w-full">
          <img src={banner} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PosterSlider;
