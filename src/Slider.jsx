import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import Card from './component/TestCards'
import img1 from './assests/man1.jpg'
import img2 from './assests/woman.jpg'
import img3 from './assests/man2.jpg'
import img4 from './assests/woman2.jpg'
import img5 from './assests/man3.jpg'


const Slider = () => {
  return (
    <div className='container mx-auto  py-4 px-4 justify-between items-center bg-white '>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        slidesPerView = {3}
        spaceBetween ={50}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
            <Card data={{imgSrc : img1, title: 'Jon Snow', position: 'Software Developer', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'}} />
        </SwiperSlide>
        <SwiperSlide>
            <Card data={{imgSrc : img2, title: 'Alex Prichart', position: 'Professor', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'}} />
        </SwiperSlide>
        <SwiperSlide>
            <Card data={{imgSrc : img3, title: 'Luke Dunphy', position: 'Manager', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'}} />
        </SwiperSlide>
        <SwiperSlide>
            <Card data={{imgSrc : img4, title: 'Clair Scott', position: 'Cloud Developer', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'}} />
        </SwiperSlide>
        <SwiperSlide>
            <Card data={{imgSrc : img5, title: 'Tommen Lannister', position: 'Software Engineer', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'}} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider