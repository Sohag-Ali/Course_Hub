"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function AddCoursePage() {
  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const courseData = {
      title: form.title.value,
      shortDescription:
        form.shortDescription.value,
      fullDescription:
        form.fullDescription.value,
      category:
        form.category.value,
      level: form.level.value,
      duration:
        form.duration.value,
      price: Number(
        form.price.value
      ),
      image: form.image.value,
      createdAt:
        new Date(),
    };

    try {
      const res = await fetch(
        "/api/courses",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            courseData
          ),
        }
      );

      const result =
        await res.json();

      if (
        result.insertedId ||
        result.acknowledged
      ) {
        Swal.fire({
          icon: "success",
          title:
            "Course Added Successfully",
          timer: 1500,
          showConfirmButton:
            false,
        });

        form.reset();
      }
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title:
          "Something went wrong",
      });
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      <div className="text-center mb-10">

        <h1 className="text-4xl md:text-5xl font-bold">
          Add New Course
        </h1>

        <p className="mt-4 text-base-content/70">
          Create and publish a
          new course for learners.
        </p>

      </div>

      <div className="card bg-base-100 shadow-xl">

        <div className="card-body">

          <form
            onSubmit={
              handleSubmit
            }
            className="space-y-6"
          >

            {/* Title */}

            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Course Title
                </span>
              </label>

              <input
                type="text"
                name="title"
                required
                placeholder="Enter course title"
                className="input input-bordered w-full"
              />
            </div>

            {/* Short Description */}

            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Short Description
                </span>
              </label>

              <textarea
                name="shortDescription"
                required
                rows="3"
                className="textarea textarea-bordered w-full"
                placeholder="Short course description"
              ></textarea>
            </div>

            {/* Full Description */}

            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Full Description
                </span>
              </label>

              <textarea
                name="fullDescription"
                required
                rows="6"
                className="textarea textarea-bordered w-full"
                placeholder="Detailed course description"
              ></textarea>
            </div>

            {/* Category + Level */}

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="label">
                  <span className="label-text font-semibold">
                    Category
                  </span>
                </label>

                <select
                  name="category"
                  required
                  className="select select-bordered w-full"
                >
                  <option>
                    Web Development
                  </option>
                  <option>
                    Programming
                  </option>
                  <option>
                    Design
                  </option>
                  <option>
                    Data Science
                  </option>
                  <option>
                    Marketing
                  </option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">
                    Level
                  </span>
                </label>

                <select
                  name="level"
                  required
                  className="select select-bordered w-full"
                >
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

            </div>

            {/* Duration + Price */}

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="label">
                  <span className="label-text font-semibold">
                    Duration
                  </span>
                </label>

                <input
                  type="text"
                  name="duration"
                  required
                  placeholder="8 Weeks"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">
                    Price
                  </span>
                </label>

                <input
                  type="number"
                  name="price"
                  required
                  placeholder="99"
                  className="input input-bordered w-full"
                />
              </div>

            </div>

            {/* Image URL */}

            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Image URL
                </span>
              </label>

              <input
                type="url"
                name="image"
                required
                placeholder="https://..."
                className="input input-bordered w-full"
              />
            </div>

            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading
                ? "Adding..."
                : "Add Course"}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}