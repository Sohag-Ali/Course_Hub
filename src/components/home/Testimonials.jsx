"use client";

import Image from "next/image";
import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Rahman",
    role: "Frontend Developer",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The React and Next.js courses completely transformed my career. I landed my first developer job within 3 months.",
  },

  {
    id: 2,
    name: "Fatema Islam",
    role: "UI/UX Designer",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Amazing instructors, practical projects, and a very supportive learning environment.",
  },

  {
    id: 3,
    name: "Nayeem Hasan",
    role: "Software Engineer",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "One of the best learning platforms I've ever used. Highly recommended for beginners and professionals.",
  },

  {
    id: 4,
    name: "Sarah Khan",
    role: "Full Stack Developer",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "The structured learning path and practical assignments helped me become job-ready.",
  },

  {
    id: 5,
    name: "Jannatul Ferdous",
    role: "Data Analyst",
    image:
      "https://randomuser.me/api/portraits/women/21.jpg",
    review:
      "The mentors guided me through every step. The hands-on projects gave me real confidence.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-base-100">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Header */}

        <div className="text-center mb-16">

          <span className="badge badge-primary badge-lg px-5 py-4">
            ⭐ Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-5">
            Loved By Learners
            <span className="text-primary block mt-2">
              Around The World
            </span>
          </h2>

          <p className="mt-5 text-lg text-base-content/70 max-w-2xl mx-auto">
            Discover how Hero Kids is helping
            students achieve their goals and
            build successful careers.
          </p>

        </div>

        {/* Swiper */}

        <Swiper
          modules={[
            Autoplay,
            Pagination,
          ]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1280: {
              slidesPerView: 3,
            },
          }}
        >

          {testimonials.map(
            (item) => (
              <SwiperSlide
                key={item.id}
                className="pb-14"
              >

                <div className="group relative h-full">

                  {/* Glow */}

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Card */}

                  <div className="relative h-full bg-base-100/90 backdrop-blur-xl border border-base-300 rounded-[32px] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

                    {/* Quote */}

                    <FaQuoteLeft
                      size={36}
                      className="text-primary/30 mb-5"
                    />

                    {/* Stars */}

                    <div className="flex gap-1 mb-5">

                      {[...Array(5)].map(
                        (_, i) => (
                          <FaStar
                            key={i}
                            className="text-yellow-400"
                          />
                        )
                      )}

                    </div>

                    {/* Review */}

                    <p className="text-base-content/80 text-lg leading-8 min-h-[180px]">
                      &quot;{item.review}&quot;
                    </p>

                    <div className="divider my-6"></div>

                    {/* User */}

                    <div className="flex items-center gap-4">

                      <div className="avatar">

                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

                          <Image
                            src={
                              item.image
                            }
                            alt={
                              item.name
                            }
                            width={64}
                            height={64}
                          />

                        </div>

                      </div>

                      <div>

                        <h3 className="font-bold text-lg">
                          {item.name}
                        </h3>

                        <p className="text-sm text-base-content/60">
                          {item.role}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </SwiperSlide>
            )
          )}

        </Swiper>

      </div>

    </section>
  );
}