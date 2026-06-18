"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-primary via-primary to-secondary p-10 md:p-16 text-center shadow-2xl"
        >

          {/* Decorative Circles */}

          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/10"></div>

          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-white/10"></div>

          {/* Content */}

          <div className="relative z-10">

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
            >

              <span className="badge badge-lg bg-white text-primary border-0">
                🚀 Join Hero Kids
              </span>

            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mt-6 leading-tight">

              Start Your Learning
              <span className="block">
                Journey Today
              </span>

            </h2>

            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-8">

              Join thousands of students who are
              building future-ready skills through
              expert-led courses and hands-on learning.

            </p>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

              <Link
                href="/items"
                className="btn btn-lg bg-white text-primary hover:bg-base-100 border-0"
              >
                Browse Courses
              </Link>

              <Link
                href="/register"
                className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary"
              >
                Get Started Free
              </Link>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

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
                <div
                  key={item.label}
                  className="text-white"
                >

                  <h3 className="text-3xl md:text-4xl font-bold">
                    {item.value}
                  </h3>

                  <p className="text-white/80 mt-2">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}