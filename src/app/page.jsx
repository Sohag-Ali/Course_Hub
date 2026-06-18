import Categories from "@/components/home/Categories";
import CTASection from "@/components/home/CTASection";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import Hero from "@/components/home/Hero";

import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CourseSkeleton from "@/components/skeleton/CourseSkeleton";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="">
      <section>
        <Hero></Hero>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <section className="py-20">
              <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-10">
                  Featured Courses
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, index) => (
                    <CourseSkeleton key={index} />
                  ))}
                </div>
              </div>
            </section>
          }
        >
          <FeaturedCourses />
        </Suspense>
        <section>
          <Categories />
        </section>
        <section>
          <WhyChooseUs />
        </section>
        <section>
          <Testimonials />
        </section>
        <section>
          <CTASection />
        </section>
      </div>
    </div>
  );
}
