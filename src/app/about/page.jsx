import Image from "next/image";
import Link from "next/link";
import {
  FaBookOpen,
  FaUsers,
  FaCertificate,
  FaLaptopCode,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <div>

      {/* Hero Section */}

      <section className="bg-base-200 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-5xl font-bold">
            About CourseHub
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-base-content/70">
            CourseHub is a modern online learning platform
            designed to help students and professionals
            gain valuable skills through high-quality
            courses and expert guidance.
          </p>

        </div>
      </section>

      {/* Mission Section */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Learning"
              width={700}
              height={500}
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-lg leading-8 text-base-content/70">
              Our mission is to make quality education
              accessible to everyone. We believe learning
              should be flexible, affordable, and practical.
              Through carefully designed courses, we help
              learners build real-world skills and achieve
              their career goals.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}

      <section className="bg-base-200 py-20">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose CourseHub
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <FaBookOpen className="text-5xl text-primary" />
                <h3 className="font-bold text-xl">
                  Quality Courses
                </h3>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <FaUsers className="text-5xl text-primary" />
                <h3 className="font-bold text-xl">
                  Expert Mentors
                </h3>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <FaCertificate className="text-5xl text-primary" />
                <h3 className="font-bold text-xl">
                  Certificates
                </h3>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <FaLaptopCode className="text-5xl text-primary" />
                <h3 className="font-bold text-xl">
                  Practical Learning
                </h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-5xl font-bold text-primary">
                500+
              </h2>
              <p className="mt-2">
                Courses
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-primary">
                10K+
              </h2>
              <p className="mt-2">
                Students
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-primary">
                50+
              </h2>
              <p className="mt-2">
                Instructors
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-primary">
                95%
              </h2>
              <p className="mt-2">
                Success Rate
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="bg-primary text-primary-content py-20">
        <div className="max-w-4xl mx-auto text-center px-4">

          <h2 className="text-4xl font-bold">
            Start Your Learning Journey Today
          </h2>

          <p className="mt-4">
            Explore our courses and build skills that
            help you grow personally and professionally.
          </p>

          <Link
            href="/items"
            className="btn btn-lg mt-8"
          >
            Browse Courses
          </Link>

        </div>
      </section>

    </div>
  );
}