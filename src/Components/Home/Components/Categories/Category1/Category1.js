import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./Category1.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Category1 = () => {
  // const imgs = [
  //   {
  //     id: 1,
  //     src: "https://source.unsplash.com/user/erondu/300x350",
  //   },
  //   {
  //     id: 2,
  //     src: "https://source.unsplash.com/user/erondu/300x350",
  //   },
  //   {
  //     id: 3,
  //     src: "https://source.unsplash.com/user/erondu/300x350",
  //   },
  //   {
  //     id: 4,
  //     src: "https://source.unsplash.com/user/erondu/300x350",
  //   },
  //   {
  //     id: 5,
  //     src: "https://source.unsplash.com/user/erondu/300x350",
  //   },

  //   {
  //     id: 6,
  //     src: "https://source.unsplash.com/user/erondu/300x350",
  //   },
  //   {
  //     id: 7,
  //     src: "https://source.unsplash.com/user/erondu/300x350",
  //   },
  //   {
  //     id: 8,
  //     src: "https://source.unsplash.com/user/erondu/300x350",
  //   },
  //   {
  //     id: 9,
  //     src: "https://source.unsplash.com/user/erondu/300x350",
  //   },
  // ];

  return (
    <div className="container mt-5 mb-5">
      <h2 className="my-2">
        <b>NEW LAUNCHES</b>
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://source.unsplash.com/300x350/?fashion" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/300x350/?fashion" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/300x350/?fashion" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/300x350/?fashion" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/300x350/?fashion" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/300x350/?fashion" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/300x350/?fashion" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/300x350/?fashion" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category1;
