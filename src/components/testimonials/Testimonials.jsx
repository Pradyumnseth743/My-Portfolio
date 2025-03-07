// import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/pd2.jpg";
import AVTR2 from "../../assets/pd33.jpg";
import AVTR3 from "../../assets/pd4.jpg";
import AVTR4 from "../../assets/pd5.jpg";
import AVTR5 from "../../assets/pd6.jpeg";
import React, { useEffect } from "react";


import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Website Development",
    review:
    "Hello, I'm Pradyumn Seth, a recent Full Stack Development Graduate with a passion for creating visually stunning websites and applications. I was fortunate enough to work with Milliman on Live projects, and I'm excited to share how the experience helped me gain practical knowledge and confidence in my skills."  },
  {
    avatar: AVTR2,
    name: "UI/UX Designer & Developer",
    review:
    "Embark on a user-centered design journey with my UI/UX freelancing services. As a passionate designer and developer, I specialize in crafting seamless, intuitive interfaces that prioritize user experience. From wireframes to interactive prototypes, I am dedicated to creating digital experiences that resonate." ,
  },
  {
    avatar: AVTR3,
    name: "Graphic Designing",
    review:
    "Creating captivating visual identities through logo design, crafting eye-catching thumbnails, curating impactful social media posts, and designing captivating cover pages that leave a lasting impression." ,
  },
  {
    avatar: AVTR4,
    name: "Photo Editing",
    review:
    "Unleash the power of visuals with my photo editing freelancing services. Whether its retouching, color correction, or enhancing images, I am here to transform your snapshots into captivating works of art. With an eye for detail and a passion for perfection, I am dedicated to ensuring your images stand out and tell a compelling story." ,
  },
  {
    avatar: AVTR5,
    name: "Video Editing",
    review:
    "Step into the world of storytelling through my video editing freelancing services. From raw footage to polished narratives, I specialize in transforming videos into engaging visual journeys. Whether its trimming, transitions, or adding that cinematic touch, I am committed to bringing your content to life." ,
  },
];

const Testimonials = () => {
   // Force Swiper to recalculate layout on component mount
   useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);
  return (
    <section style={{marginTop:"4rem"}} id='testimonials'>
      <h5>Services Offer</h5>
      <h2>Expertise</h2>

      <Swiper className="container testimonials__container" 
      // modules={[ Pagination]}
      //   spaceBetween={40}
      //   slidesPerView={1}
      //   pagination={{ clickable: true }}
      modules={[Pagination]}
  spaceBetween={40}
  slidesPerView={1}
  pagination={{ clickable: true }}
  centeredSlides={true}
  loop={true}
  style={{ width: "100%", overflow: "hidden" }}
  onSwiper={(swiper) => swiper.update()} /* Force Swiper to recalculate layout */
        >

        {
          data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} />
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
    </section >
  )
}

export default Testimonials








