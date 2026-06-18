"use client";

import { motion } from "framer-motion";

import {
  FaCode,
  FaPaintBrush,
  FaChartLine,
  FaDatabase,
} from "react-icons/fa";

const categories = [
  {
    name: "Development",
    icon: <FaCode />,
    courses: "120+ Courses",
  },

  {
    name: "UI/UX Design",
    icon: <FaPaintBrush />,
    courses: "80+ Courses",
  },

  {
    name: "Marketing",
    icon: <FaChartLine />,
    courses: "60+ Courses",
  },

  {
    name: "Data Science",
    icon: <FaDatabase />,
    courses: "90+ Courses",
  },
];

export default function Categories() {
  return (
    <section className="relative py-24 overflow-hidden bg-base-200">

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
            Popular Categories
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            Explore Learning Paths
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-base-content/70">
            Discover courses across different fields
            and build the skills you need for your future.
          </p>

        </motion.div>

        {/* Categories */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map(
            (category, index) => (
              <motion.div
                key={category.name}
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
                    index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group"
              >

                <div className="relative rounded-3xl overflow-hidden">

                  {/* Glow */}

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>

                  {/* Card */}

                  <div className="relative bg-base-100/90 backdrop-blur-xl border border-base-300 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500">

                    {/* Icon */}

                    <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-4xl mx-auto mb-6 group-hover:rotate-12 transition-all duration-500">

                      {category.icon}

                    </div>

                    {/* Name */}

                    <h3 className="text-2xl font-bold mb-3">

                      {category.name}

                    </h3>

                    {/* Count */}

                    <p className="text-base-content/70">

                      {category.courses}

                    </p>

                  </div>

                </div>

              </motion.div>
            )
          )}

        </div>

      </div>

    </section>
  );
}