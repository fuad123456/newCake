import React from "react";
import  SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import{ Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

SwiperCore.use([Navigation]);

export default function Swiper1(props) {
  let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <Swiper
      loop={true}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={32}
      slidesPerView={5}
      navigation//={{nextEl:'swiper-button-next'}}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
	
      {ar.map((el) => {
		return(
        <SwiperSlide key={el}>
			<img 	src={require(`../assets/img/partners-img-${el}.jpg`)}
					alt="Логотип"
					className="partners-swiper-slide__img" />
		</SwiperSlide>
		)
      })}
    </Swiper>
  );
}
