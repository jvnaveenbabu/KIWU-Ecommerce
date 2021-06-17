import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./Category3.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

const Category1 = () => {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="my-2">
        <b>NEW DESIGNERS</b>
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
          <img src="https://source.unsplash.com/300x350/?new,launch" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/300x350/?new,launch" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/300x350/?new,launch" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/300x350/?new,launch" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/300x350/?new,launch" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/300x350/?new,launch" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category1;
