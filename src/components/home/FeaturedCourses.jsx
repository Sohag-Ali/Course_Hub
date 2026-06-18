import Link from "next/link";
import { dbConnect, collections } from "@/lib/dbConnect";
import CourseCard from "@/components/CourseCard";

export default async function FeaturedCourses() {
  const courseCollection =
    await dbConnect(collections.COURSES);

  const courses =
    await courseCollection
      .find({})
      .limit(6)
      .toArray();

  return (
    <section className="relative py-24 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Header */}

        <div className="text-center mb-14">

          <div className="badge badge-primary badge-lg mb-4">
            🚀 Featured Courses
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Learn From The Best
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-base-content/70 text-lg">
            Explore our most popular courses and
            gain practical skills that help you
            build a successful future.
          </p>

        </div>

        {/* Courses Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((course) => (
            <div
              key={course._id.toString()}
              className="group transition-all duration-500 hover:-translate-y-3"
            >

              <div className="relative">

                {/* Glow Effect */}

                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Card */}

                <div className="relative h-full">
                  <CourseCard
                    course={JSON.parse(
                      JSON.stringify(course)
                    )}
                  />
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}

        <div className="text-center mt-16">

          <Link
            href="/items"
            className="btn btn-primary btn-lg px-10"
          >
            View All Courses
          </Link>

        </div>

      </div>

    </section>
  );
}