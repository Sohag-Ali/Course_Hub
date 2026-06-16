import Image from "next/image";
import Link from "next/link";
import { ObjectId } from "mongodb";

import {
  dbConnect,
  collections,
} from "@/lib/dbConnect";

export default async function CourseDetails({
  params,
}) {
     const { id } = await params;
  const courseCollection =
    await dbConnect(
      collections.COURSES
    );

  const course =
    await courseCollection.findOne({
      _id: new ObjectId(id),
    });

  const relatedCourses =
    await courseCollection
      .find({
        category:
          course.category,
        _id: {
          $ne: course._id,
        },
      })
      
      .toArray();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Back Button */}

      <Link
        href="/items"
        className="btn btn-outline mb-8"
      >
        ← Back To Courses
      </Link>

      {/* Main Section */}

      <div className="grid lg:grid-cols-2 gap-10">

        <div>
          <Image
            src={course.image}
            alt={course.title}
            width={700}
            height={500}
            className="rounded-xl w-full object-cover"
          />
        </div>

        <div>
          <div className="badge badge-primary mb-4">
            {course.category}
          </div>

          <h1 className="text-4xl font-bold">
            {course.title}
          </h1>

          <p className="mt-6 text-lg text-base-content/80">
            {course.fullDescription}
          </p>

          {/* Specifications */}

          <div className="mt-8 space-y-4">

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">
                Category
              </span>

              <span>
                {course.category}
              </span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">
                Level
              </span>

              <span>
                {course.level}
              </span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">
                Duration
              </span>

              <span>
                {course.duration}
              </span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">
                Price
              </span>

              <span className="text-primary font-bold">
                ${course.price}
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Related Courses */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Related Courses
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {relatedCourses.map(
            (item) => (
              <div
                key={item._id.toString()}
                className="card bg-base-100 shadow-lg"
              >
                <figure>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="h-52 w-full object-cover"
                  />
                </figure>

                <div className="card-body">
                  <h3 className="card-title">
                    {item.title}
                  </h3>

                  <p className="line-clamp-2">
                    {
                      item.shortDescription
                    }
                  </p>

                  <Link
                    href={`/items/${item._id}`}
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            )
          )}

        </div>
      </section>

    </div>
  );
}