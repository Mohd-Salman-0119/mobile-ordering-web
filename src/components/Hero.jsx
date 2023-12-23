import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { swiperSlider } from "../constants/constants";

const Hero = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={5}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
      }}
      loop={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper z-40"
    >
      {swiperSlider?.map((banner, index) => (
        <SwiperSlide key={index} className="w-full">
          <img src={banner} className="w-full" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
