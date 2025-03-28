import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/pd2.jpg";
import AVTR2 from "../../assets/pd33.jpg";
import AVTR3 from "../../assets/pd4.jpg";
import AVTR4 from "../../assets/pd5.jpg";
import AVTR5 from "../../assets/pd6.jpeg";

import { Pagination, Autoplay } from "swiper/modules"; // ✅ Import Autoplay
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Website/Software Developer",
    review:
      "Hello, I'm Pradyumn Seth, a recent Full Stack/Software Development Graduate with a passion for creating visually stunning websites and applications. I was fortunate enough to work with Milliman on Live projects and ZeMoSo Technologies, and I'm excited to share how the experience helped me gain practical knowledge and confidence in my skills.",
  },
  {
    avatar: AVTR2,
    name: "Data Analyst",
    review:
      "Passionate Data Analyst with expertise in transforming raw data into actionable insights. Proficient in data visualization, statistical analysis, and SQL, with a strong foundation in Python and Excel. Experienced in problem-solving, trend analysis, and optimizing business decisions through data-driven strategies.",
  },
  {
    avatar: AVTR3,
    name: "Graphic Designer",
    review:
      "Creating captivating visual identities through logo design, crafting eye-catching thumbnails, curating impactful social media posts, and designing captivating cover pages that leave a lasting impression.",
  },
  {
    avatar: AVTR4,
    name: "Content Creater",
    review:
      "Creative YouTube Video Content Creator with expertise in storytelling, video editing, and audience engagement. Skilled in scripting, filming, and post-production, delivering high-quality, engaging content. Passionate about crafting visually compelling videos that captivate and inspire viewers.",
  },
  {
    avatar: AVTR5,
    name: "Football & Business Enthusiast",
    review:
      "Blending the strategic mindset of football with the corporate world—leveraging teamwork, adaptability, and data-driven decision-making to drive success both on the field and in business.",
  },
];

const Testimonials = () => {
  return (
    <section style={{ marginTop: "4rem" }} id="testimonials">
      <h5>Services Offered</h5>
      <h2>Expertise</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]} // ✅ Added Autoplay module
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // ✅ Auto slide every 3 seconds
          disableOnInteraction: false, // ✅ Keeps autoplay even when user interacts
        }}
        style={{ overflow: "hidden" }}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small style={{textAlign:"justify"}}className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
