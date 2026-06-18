import Image from "next/image";
import Link from "next/link";
import { ObjectId } from "mongodb";

import { dbConnect, collections } from "@/lib/dbConnect";

import { notFound } from "next/navigation";

import { FaClock, FaLayerGroup, FaTag, FaDollarSign } from "react-icons/fa";
import EnrollButton from "@/components/EnrollButton";

export default async function CourseDetails({ params }) {
  const { id } = await params;

  const courseCollection = await dbConnect(collections.COURSES);

  const course = await courseCollection.findOne({
    _id: new ObjectId(id),
  });

  if (!course) {
    notFound();
  }

  const relatedCourses = await courseCollection
    .find({
      category: course.category,
      _id: {
        $ne: course._id,
      },
    })
    .limit(3)
    .toArray();

  return (
    <div className="relative overflow-hidden">
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Back Button */}

        <Link href="/items" className="btn btn-outline mb-8">
          ← Back To Courses
        </Link>

        {/* Hero Section */}

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src={course.image}
              alt={course.title}
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Info */}

          <div>
            <div className="badge badge-primary badge-lg mb-4">
              {course.category}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold">{course.title}</h1>

            <p className="mt-6 text-lg text-base-content/70 leading-8">
              {course.fullDescription}
            </p>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body p-5 flex-row items-center">
                  <FaLayerGroup className="text-primary text-2xl" />

                  <div>
                    <p className="text-sm opacity-60">Level</p>

                    <h4 className="font-bold">{course.level}</h4>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-lg">
                <div className="card-body p-5 flex-row items-center">
                  <FaClock className="text-primary text-2xl" />

                  <div>
                    <p className="text-sm opacity-60">Duration</p>

                    <h4 className="font-bold">{course.duration}</h4>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-lg">
                <div className="card-body p-5 flex-row items-center">
                  <FaTag className="text-primary text-2xl" />

                  <div>
                    <p className="text-sm opacity-60">Category</p>

                    <h4 className="font-bold">{course.category}</h4>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-lg">
                <div className="card-body p-5 flex-row items-center">
                  <FaDollarSign className="text-primary text-2xl" />

                  <div>
                    <p className="text-sm opacity-60">Price</p>

                    <h4 className="font-bold text-primary">${course.price}</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-8">
              <EnrollButton
                course={{
                  id: course._id.toString(),
                  title: course.title,
                  image: course.image,
                  category: course.category,
                  level: course.level,
                  price: course.price,
                }}
              />

              <Link href="/items" className="btn btn-outline btn-lg">
                Browse More
              </Link>
            </div>
          </div>
        </div>

        {/* Description Section */}

        <section className="mt-20">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-3xl font-bold mb-4">Course Overview</h2>

              <p className="leading-8 text-base-content/70">
                {course.fullDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Related Courses */}

        <section className="mt-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Related Courses</h2>

            <Link href="/items" className="btn btn-sm btn-outline">
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedCourses.map((item) => (
              <div
                key={item._id.toString()}
                className="card bg-base-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <figure>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="h-56 w-full object-cover"
                  />
                </figure>

                <div className="card-body">
                  <div className="badge badge-primary">{item.category}</div>

                  <h3 className="card-title">{item.title}</h3>

                  <p className="line-clamp-2 text-base-content/70">
                    {item.shortDescription}
                  </p>

                  <Link
                    href={`/items/${item._id}`}
                    className="btn btn-primary mt-3"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
