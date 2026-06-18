"use client";

import { motion } from "framer-motion";

import {
  FaChalkboardTeacher,
  FaCertificate,
  FaClock,
} from "react-icons/fa";

const features = [
  {
    title: "Expert Mentors",
    description:
      "Learn directly from experienced industry professionals and gain practical knowledge.",
    icon: <FaChalkboardTeacher />,
  },

  {
    title: "Certified Courses",
    description:
      "Receive recognized certificates and showcase your achievements.",
    icon: <FaCertificate />,
  },

  {
    title: "Flexible Learning",
    description:
      "Study anytime, anywhere at your own pace with lifetime access.",
    icon: <FaClock />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-16"
        >

          <span className="badge badge-primary badge-lg">
            Why Hero Kids
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            Why Choose Us
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-base-content/70">
            We provide a modern learning experience
            designed to help students grow their skills,
            build confidence, and achieve success.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map(
            (feature, index) => (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay:
                    index * 0.2,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group"
              >

                <div className="relative h-full rounded-3xl overflow-hidden">

                  {/* Glow Effect */}

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>

                  {/* Card */}

                  <div className="relative bg-base-100/90 backdrop-blur-xl border border-base-300 rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500">

                    {/* Icon */}

                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-4xl mx-auto mb-6 group-hover:rotate-6 transition-all duration-500">

                      {feature.icon}

                    </div>

                    {/* Content */}

                    <h3 className="text-2xl font-bold text-center mb-4">

                      {feature.title}

                    </h3>

                    <p className="text-center text-base-content/70 leading-7">

                      {feature.description}

                    </p>

                  </div>

                </div>

              </motion.div>
            )
          )}

        </div>

        {/* Bottom Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

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
              className="bg-base-100 rounded-2xl shadow-lg p-6 text-center"
            >

              <h3 className="text-4xl font-bold text-primary">

                {item.value}

              </h3>

              <p className="mt-2 text-base-content/70">

                {item.label}

              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}