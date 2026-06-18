"use client";

import { useEffect, useState } from "react";
import CourseCard from "@/components/CourseCard";
import CourseSkeleton from "@/components/skeleton/CourseSkeleton";

export default function ItemsPage() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [category, setCategory] =
    useState("All");

  const [level, setLevel] =
    useState("All");

  useEffect(() => {
  fetch("/api/courses")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setCourses(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

  const filteredCourses =
    courses.filter((course) => {
      const searchMatch =
        course.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const categoryMatch =
        category === "All"
          ? true
          : course.category ===
            category;

      const levelMatch =
        level === "All"
          ? true
          : course.level ===
            level;

      return (
        searchMatch &&
        categoryMatch &&
        levelMatch
      );
    });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* Header */}

      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          Explore Courses
        </h1>

        <p className="mt-4 text-base-content/70">
          Discover top-quality
          courses to level up
          your skills.
        </p>
      </div>

      {/* Search + Filter */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">

        <input
          type="text"
          placeholder="Search Course..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <select
          className="select select-bordered w-full"
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
        >
          <option>All</option>
          <option>
            Web Development
          </option>
          <option>
            Programming
          </option>
          <option>Design</option>
          <option>
            Marketing
          </option>
          <option>
            Data Science
          </option>
        </select>

        <select
          className="select select-bordered w-full"
          value={level}
          onChange={(e) =>
            setLevel(
              e.target.value
            )
          }
        >
          <option>All</option>
          <option>
            Beginner
          </option>
          <option>
            Intermediate
          </option>
          <option>
            Advanced
          </option>
        </select>
      </div>

      {/* Course Grid */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

  {loading
    ? [...Array(6)].map((_, index) => (
        <CourseSkeleton key={index} />
      ))
    : filteredCourses.map((course) => (
        <CourseCard
          key={course._id}
          course={course}
        />
      ))}

</div>

      {/* Empty State */}

      {filteredCourses.length ===
        0 && (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">
            No Courses Found
          </h2>

          <p>
            Try changing your
            search or filters.
          </p>
        </div>
      )}
    </div>
  );
}