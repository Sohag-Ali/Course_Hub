"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaBookOpen,
  FaUsers,
  FaCertificate,
  FaLaptopCode,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBookOpen size={40} />,
    title: "Quality Courses",
    description:
      "Carefully designed courses focused on practical skills.",
  },

  {
    icon: <FaUsers size={40} />,
    title: "Expert Mentors",
    description:
      "Learn directly from industry professionals.",
  },

  {
    icon: <FaCertificate size={40} />,
    title: "Certificates",
    description:
      "Earn certificates and showcase your achievements.",
  },

  {
    icon: <FaLaptopCode size={40} />,
    title: "Practical Learning",
    description:
      "Build real-world projects and hands-on experience.",
  },
];

export default function AboutPage() {
  return (
    <div>

      {/* Hero Section */}

      <section className="relative overflow-hidden py-28">

        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <span className="badge badge-primary badge-lg">
              🚀 About Hero Kids
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mt-6">
              Empowering
              <span className="text-primary block">
                Future Learners
              </span>
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-base-content/70">
              Hero Kids is a modern learning platform
              helping students build practical skills,
              grow their careers, and achieve success
              through quality education.
            </p>

            <div className="flex justify-center flex-wrap gap-4 mt-8">

              <Link
                href="/items"
                className="btn btn-primary btn-lg"
              >
                Explore Courses
              </Link>

              <Link
                href="/contact"
                className="btn btn-outline btn-lg"
              >
                Contact Us
              </Link>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Mission Section */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Learning"
              width={700}
              height={500}
              className="rounded-3xl shadow-2xl"
            />

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <h2 className="text-4xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-lg leading-8 text-base-content/70">
              Our mission is to make quality education
              accessible to everyone. We provide modern,
              practical, and affordable learning
              experiences that help students gain
              real-world skills and become industry-ready.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="py-24 bg-base-200">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">

            <h2 className="text-5xl font-bold">
              Why Choose Us
            </h2>

            <p className="mt-4 text-base-content/70">
              Everything you need to achieve your
              learning goals.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {features.map(
              (feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                  }}
                  className="card bg-base-100 shadow-xl"
                >

                  <div className="card-body items-center text-center">

                    <div className="text-primary">
                      {feature.icon}
                    </div>

                    <h3 className="text-xl font-bold">
                      {feature.title}
                    </h3>

                    <p>
                      {
                        feature.description
                      }
                    </p>

                  </div>

                </motion.div>
              )
            )}

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                value: "500+",
                label: "Courses",
              },
              {
                value: "10K+",
                label: "Students",
              },
              {
                value: "50+",
                label: "Mentors",
              },
              {
                value: "95%",
                label: "Success Rate",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{
                  scale: 1.05,
                }}
                className="bg-base-100 rounded-3xl shadow-xl p-8 text-center"
              >

                <h3 className="text-5xl font-bold text-primary">
                  {item.value}
                </h3>

                <p className="mt-3">
                  {item.label}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* Learning Journey */}

      <section className="py-24 bg-base-200">

        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-5xl font-bold text-center mb-16">
            Your Learning Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                step: "01",
                title: "Choose Course",
                desc: "Select the perfect course for your goals.",
              },

              {
                step: "02",
                title: "Learn & Practice",
                desc: "Build practical skills through projects.",
              },

              {
                step: "03",
                title: "Get Certified",
                desc: "Earn certificates and grow your career.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="card bg-base-100 shadow-xl"
              >

                <div className="card-body">

                  <h3 className="text-5xl font-bold text-primary">
                    {item.step}
                  </h3>

                  <h4 className="text-2xl font-bold">
                    {item.title}
                  </h4>

                  <p>{item.desc}</p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-4">

          <div className="bg-gradient-to-r from-primary to-secondary rounded-[40px] p-12 text-center text-white">

            <h2 className="text-4xl md:text-6xl font-bold">
              Ready To Start Learning?
            </h2>

            <p className="mt-5 text-lg">
              Join thousands of learners and begin
              your journey today.
            </p>

            <Link
              href="/items"
              className="btn btn-lg mt-8"
            >
              Browse Courses
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}