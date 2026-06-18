"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title:
      "Learn Skills That Shape Your Future",
    subtitle:
      "Master industry-demanded skills through expert-led courses and hands-on projects.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920",
  },

  {
    id: 2,
    title:
      "Become a Professional Developer",
    subtitle:
      "From JavaScript to Next.js, build real-world projects and accelerate your career.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920",
  },

  {
    id: 3,
    title:
      "Flexible Learning Anywhere",
    subtitle:
      "Study at your own pace with modern, engaging, and practical courses.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1920",
  },
];

export default function Hero() {
  return (
    <section className="mt-4">
      <Swiper
        modules={[
          Autoplay,
          Pagination,
          Navigation,
        ]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        loop
        speed={1200}
        className="h-[60vh] md:h-[70vh] lg:h-[75vh] rounded-3xl overflow-hidden"
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

              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>

              {/* Content */}

              <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 h-full items-center gap-10">

                  {/* Left Side */}

                  <div className="text-white">

                    <div className="badge badge-primary badge-lg mb-5">
                      🚀 Trusted By 10,000+ Students
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                      {slide.title}
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">

                      <Link
                        href="/items"
                        className="btn btn-primary btn-lg"
                      >
                        Explore Courses
                      </Link>

                      <Link
                        href="/about"
                        className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-black"
                      >
                        Learn More
                      </Link>

                    </div>

                    {/* Stats */}

                    <div className="flex flex-wrap gap-8 mt-10">

                      <div>
                        <h3 className="text-3xl font-bold">
                          500+
                        </h3>
                        <p className="text-gray-300">
                          Courses
                        </p>
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold">
                          10K+
                        </h3>
                        <p className="text-gray-300">
                          Students
                        </p>
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold">
                          4.9★
                        </h3>
                        <p className="text-gray-300">
                          Rating
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* Right Side */}

                  <div className="hidden lg:flex justify-center relative">

                    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-4 shadow-2xl">

                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-[500px] h-[320px] object-cover rounded-2xl"
                      />

                    </div>

                    {/* Floating Card 1 */}

                    <div className="absolute -bottom-6 -left-6 bg-white text-black rounded-2xl p-5 shadow-xl">

                      <h3 className="text-2xl font-bold">
                        95%
                      </h3>

                      <p className="text-sm">
                        Success Rate
                      </p>

                    </div>

                    {/* Floating Card 2 */}

                    <div className="absolute top-8 -right-6 bg-primary text-white rounded-2xl p-5 shadow-xl">

                      <h3 className="text-2xl font-bold">
                        24/7
                      </h3>

                      <p className="text-sm">
                        Learning Access
                      </p>

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