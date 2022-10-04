import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import '../../Styles/Slider2.css'
import { Pagination } from "swiper";
import sliderPhoto from '../../image/sliderPhoto.png'
import sliderPhotoF from '../../image/sliderPhotoF.png'

export default function Slider2() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={sliderPhotoF} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderPhoto} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderPhoto} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderPhoto} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}