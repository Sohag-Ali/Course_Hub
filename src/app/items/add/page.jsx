"use client";

import PrivateRoute from "@/components/PrivateRoute";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AddCoursePage() {
  const [loading, setLoading] =
    useState(false);

  const [imagePreview, setImagePreview] =
    useState("");

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
        setImagePreview("");
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
    <PrivateRoute>

      <div className="relative py-16 overflow-hidden">

        {/* Background Glow */}

        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4">

          {/* Header */}

          <div className="text-center mb-12">

            <div className="badge badge-primary badge-lg mb-4">
              🚀 Create New Course
            </div>

            <h1 className="text-4xl md:text-5xl font-bold">
              Add New Course
            </h1>

            <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
              Share your knowledge with thousands
              of learners and build an engaging
              learning experience.
            </p>

          </div>

          {/* Form Card */}

          <div className="card bg-base-100 shadow-2xl border border-base-300 rounded-3xl">

            <div className="card-body p-8">

              <form
                onSubmit={
                  handleSubmit
                }
                className="space-y-6"
              >

                {/* Title */}

                <div>

                  <label className="label">
                    <span className="font-semibold">
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
                    <span className="font-semibold">
                      Short Description
                    </span>
                  </label>

                  <textarea
                    name="shortDescription"
                    rows="3"
                    required
                    placeholder="Brief description"
                    className="textarea textarea-bordered w-full"
                  ></textarea>

                </div>

                {/* Full Description */}

                <div>

                  <label className="label">
                    <span className="font-semibold">
                      Full Description
                    </span>
                  </label>

                  <textarea
                    name="fullDescription"
                    rows="6"
                    required
                    placeholder="Detailed course description"
                    className="textarea textarea-bordered w-full"
                  ></textarea>

                </div>

                {/* Category & Level */}

                <div className="grid md:grid-cols-2 gap-5">

                  <div>

                    <label className="label">
                      <span className="font-semibold">
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
                      <span className="font-semibold">
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

                {/* Duration & Price */}

                <div className="grid md:grid-cols-2 gap-5">

                  <div>

                    <label className="label">
                      <span className="font-semibold">
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
                      <span className="font-semibold">
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
                    <span className="font-semibold">
                      Course Image URL
                    </span>
                  </label>

                  <input
                    type="url"
                    name="image"
                    required
                    placeholder="https://..."
                    onChange={(e) =>
                      setImagePreview(
                        e.target.value
                      )
                    }
                    className="input input-bordered w-full"
                  />

                </div>

                {/* Preview */}

                {imagePreview && (
                  <div>

                    <p className="font-semibold mb-3">
                      Image Preview
                    </p>

                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-72 object-cover rounded-2xl border"
                    />

                  </div>
                )}

                {/* Submit */}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary btn-lg w-full"
                >

                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Publishing Course...
                    </>
                  ) : (
                    "🚀 Publish Course"
                  )}

                </button>

              </form>

            </div>

          </div>

        </div>

        {/* Loading Overlay */}

        {loading && (
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">

            <div className="bg-base-100 p-8 rounded-3xl shadow-2xl text-center">

              <span className="loading loading-spinner loading-lg text-primary"></span>

              <h3 className="text-xl font-bold mt-4">
                Publishing Course...
              </h3>

              <p className="text-base-content/60">
                Please wait a moment
              </p>

            </div>

          </div>
        )}

      </div>

    </PrivateRoute>
  );
}