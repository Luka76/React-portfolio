import React from 'react'
import "./Testimonials.css"
import Avatar1 from "../../assets/image-1.jpg"
import Avatar2 from "../../assets/image-5.jpg"
import Avatar3 from "../../assets/image-4.jpg"
import Avatar4 from "../../assets/image-2.jpg"

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const data =[
  {
    avatar: Avatar1,
    name: "Arwen",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam fugit praesentium explicabo inventore magni, cupiditate quasi. Molestias assumenda at veritatis, perferendis quasi, laudantium quod, impedit reprehenderit accusantium placeat adipisci."
  },
  {
    avatar: Avatar2,
    name: "Aragorn",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam fugit praesentium explicabo inventore magni, cupiditate quasi. Molestias assumenda at veritatis, perferendis quasi, laudantium quod, impedit reprehenderit accusantium placeat adipisci."
  },
  {
    avatar: Avatar3,
    name: "Sam Gamgee",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam fugit praesentium explicabo inventore magni, cupiditate quasi. Molestias assumenda at veritatis, perferendis quasi, laudantium quod, impedit reprehenderit accusantium placeat adipisci."
  },
  {
    avatar: Avatar4,
    name: "Galadriel",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam fugit praesentium explicabo inventore magni, cupiditate quasi. Molestias assumenda at veritatis, perferendis quasi, laudantium quod, impedit reprehenderit accusantium placeat adipisci."
  },
]

const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination, Navigation ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      >
        {
          data.map(({avatar, name, review}, index) =>{
            return (
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials