import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import avatar from "../assets/users.svg";
import { investor } from "../lib/helper";

const testimonials = [
  {
    quote:
      "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
    avatar: avatar,
  },
  {
    quote:
      "“Everything was organized perfectly. The trip was wonderful and I felt supported throughout. Definitely recommend!”",
    name: "Chris Thomas",
    location: "CEO of Red Button",
    avatar: avatar,
  },
  {
    quote:
      "“A truly fantastic experience! Customer service was amazing and everything went so smoothly.”",
    name: "Emily Johnson",
    location: "London, UK",
    avatar: avatar,
  },
];

export default function Testimonials() {
  return (
    <div>
    <section className="flex flex-col lg:flex-row items-start justify-between py-16 gap-60 px-4 lg:px-30 bg-white">
      <div className="flex-1 mb-12 lg:mb-0">
        <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
          Testimonials
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1e1e2a] leading-tight mb-8">
          What People Say <br /> About Us.
        </h2>

        {/* Swiper Pagination Placeholder */}
        <div
          className="flex gap-6 mt-4 cursor-pointer mb-4 [&_.swiper-pagination-bullet]:!w-3.5 [&_.swiper-pagination-bullet]:!h-3.5 
          [&_.swiper-pagination-bullet]:bg-gray-300 [&_.swiper-pagination-bullet-active]:bg-[#1e1e2a]
          [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet-active]:scale-110
          [&_.swiper-pagination-bullet]:transition-all"
          id="testimonial-pagination"
        ></div>
      </div>

      {/* RIGHT SIDE - Swiper Slider */}
      <div className="flex-1 w-full lg:w-[400px]">
        <Swiper
          modules={[Pagination]}
          spaceBetween={80}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            el: "#testimonial-pagination", // connects to the custom pagination div on the left
          }}
          className="relative "
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative">
                {/* Background shadow card */}
                {testimonials.map((t, index) => (
                  <div
                    key={index}
                    className="absolute right-1/2 bottom-3 bg-white shadow-md rounded-3xl p-6 w-[380px] shadow-lg hover:shadow-2xl transition -translate-x-1/2"
                  >
                    <div className="relative">
                      <h4 className="font-semibold text-[#1e1e2a]">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.location}</p>
                    </div>
                  </div>
                ))}
                {/* Main testimonial card */}
                <div className="bg-white shadow-md hover:shadow-2xl transition rounded-3xl p-8 w-[380px] relative z-20">
                  {/* Avatar */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-16 h-16 rounded-full border-4 border-white absolute -top-1 left-6 object-cover"
                  />

                  {/* Content */}
                  <div className="mt-8">
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {t.quote}
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold text-[#1e1e2a]">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
        <div className="flex p-3 justify-center gap-35 items-center bg-white flex-wrap">
          {investor.map((img,index)=>(
            <img key={index} src={img} alt="investor" className="w-35 h-25 m-2 inline-block" /> 
          ))}
        </div>
    </div>
  );
}
