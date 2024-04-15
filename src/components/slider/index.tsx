"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import slide_image_1 from "@/../public/assets/images/img1.jpg";
import slide_image_2 from "@/../public/assets/images/img2.jpg";
import slide_image_3 from "@/../public/assets/images/img3.jpg";
import slide_image_4 from "@/../public/assets/images/img4.jpg";
import slide_image_5 from "@/../public/assets/images/img5.jpg";
import slide_image_6 from "@/../public/assets/images/img6.jpg";
import slide_image_7 from "@/../public/assets/images/img7.jpg";
import slide_image_8 from "@/../public/assets/images/img8.jpg";

const Slider: React.FC = () => {
  const imgs = [
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
    slide_image_5,
    slide_image_6,
    slide_image_7,
    slide_image_8,
  ];

  const slider = imgs.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <img src={item.src} alt="slide_image" />
      </SwiperSlide>
    );
  });

  return (
    <div className="slider-container">
      <h6 className="slider-heading">پرفروش ترین محصولات</h6>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        // coverflowEffect={{
        //   rotate: 0,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 2.5,
        // }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {slider}

        <div className="slider-controler">
          <div className="test">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
