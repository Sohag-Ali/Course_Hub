import Categories from "@/components/home/Categories";
import CTASection from "@/components/home/CTASection";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import Hero from "@/components/home/Hero";

import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="" >

      <section>
        <Hero></Hero>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <section>
        <FeaturedCourses></FeaturedCourses>
      </section>
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
