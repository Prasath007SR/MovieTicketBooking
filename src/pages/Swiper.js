import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from 'react-player'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
// // <ReactPlayer  class="" 
export default function  HomeSwiper() {
  return (
    <>
    <div>
      <Swiper navigation={true}slidesPerView={1}
    loop={true}
    pagination={{ clickable: true}}
    modules={[Pagination,Autoplay,Navigation]}
    className="myswiper"
    autoplay={{ delay: 2000}}>
        <SwiperSlide>

                <img src="https://news.tfw2005.com/wp-content/uploads/sites/10/2023/04/ROTB-Promotional-poster-01-1278x665.jpg"alt=" "style={{width: "75%"}}  />
           </SwiperSlide>
        
       <SwiperSlide>
       <img src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1673524188%2Fnl9slzgnf0wqvdumf33l.jpg"alt=" "style={{width: "75%"}}  />
                </SwiperSlide>
        <SwiperSlide>
          <img src="https://tickets.acrossthespiderverse.movie/assets/images/mobilebanner.jpg" alt=" "style={{width: "90%"}}/>
        </SwiperSlide>
        
        <SwiperSlide>
     <img src="https://images.samsung.com/in/smartphones/galaxy-s23-ultra/buy/DM3-web-3.jpg" alt=" "style={{width: "100%"}} />
        </SwiperSlide>
   
   
      </Swiper>
      </div>
    </>
  );
}