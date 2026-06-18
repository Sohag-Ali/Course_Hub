"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "../loading";

export default function MyCoursesPage() {
  const [courses, setCourses] =
    useState([]);
  const [loading, setLoading] =
    useState(true);
    
  useEffect(() => {
    const data =
      JSON.parse(
        localStorage.getItem(
          "enrolledCourses"
        )
      ) || [];

    setCourses(data);
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      <h1 className="text-4xl font-bold mb-10">
        My Courses
      </h1>

      {courses.length ===
      0 ? (
        <div className="text-center py-20">

          <h2 className="text-2xl font-bold">
            No Enrolled Courses
          </h2>

          <p className="mt-3">
            Enroll in a course first.
          </p>

        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map(
            (course) => (
              <div
                key={
                  course.id
                }
                className="card bg-base-100 shadow-xl"
              >

                <figure>

                  <Image
                    src={
                      course.image
                    }
                    alt={
                      course.title
                    }
                    width={500}
                    height={300}
                    className="h-56 w-full object-cover"
                  />

                </figure>

                <div className="card-body">

                  <div className="badge badge-primary">
                    {
                      course.category
                    }
                  </div>

                  <h2 className="card-title">
                    {
                      course.title
                    }
                  </h2>

                  <p>
                    Level:{" "}
                    {
                      course.level
                    }
                  </p>

                  <p className="font-bold text-primary">
                    $
                    {
                      course.price
                    }
                  </p>

                </div>

              </div>
            )
          )}

        </div>
      )}

    </div>
  );
}