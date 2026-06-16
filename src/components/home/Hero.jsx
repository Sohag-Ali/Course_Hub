"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Learn Skills That Shape Your Future",
    subtitle:
      "Join thousands of students and gain industry-ready skills through expert-led courses.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920",
  },

  {
    id: 2,
    title: "Master Modern Web Development",
    subtitle:
      "From JavaScript to Next.js, become a professional developer with hands-on projects.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920",
  },

  {
    id: 3,
    title: "Learn Anytime, Anywhere",
    subtitle:
      "Flexible online learning designed for students, professionals, and lifelong learners.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1920",
  },
];

export default function Hero() {
  return (
    <section>
      <Swiper
        modules={[
          Autoplay,
          Pagination,
          Navigation,
        ]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="h-[70vh] md:h-[85vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="max-w-3xl text-white">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                      {slide.title}
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-200">
                      {slide.subtitle}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        href="/items"
                        className="btn btn-primary btn-lg"
                      >
                        Explore Courses
                      </Link>

                      <Link
                        href="/about"
                        className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-black"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}