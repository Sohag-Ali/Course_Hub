"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import PrivateRoute from "@/components/PrivateRoute";

export default function ManageItemsPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch("/api/courses");

        const data = await res.json();

        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          setCourses([]);
        }
      } catch (error) {
        console.log(error);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete Course?",
      text: "You won't be able to recover it.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(
        `/api/courses/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.deletedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Deleted Successfully",
          timer: 1500,
          showConfirmButton: false,
        });

        setCourses((prev) =>
          prev.filter(
            (course) =>
              course._id !== id
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
   <PrivateRoute>
     <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <div>
          <h1 className="text-4xl font-bold">
            Manage Courses
          </h1>

          <p className="text-base-content/70 mt-2">
            Manage all published
            courses
          </p>
        </div>

        <Link
          href="/items/add"
          className="btn btn-primary"
        >
          Add New Course
        </Link>
      </div>

      {/* Empty State */}

      {courses.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold">
            No Courses Found
          </h2>

          <p className="mt-3">
            Add your first course
          </p>
        </div>
      ) : (
        <>
          {/* Desktop Table */}

          <div className="hidden lg:block overflow-x-auto rounded-xl shadow-lg bg-base-100">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Level</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {courses.map(
                  (course) => (
                    <tr
                      key={
                        course._id
                      }
                    >
                      <td>
                        <img
                          src={
                            course.image
                          }
                          alt={
                            course.title
                          }
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      </td>

                      <td>
                        {
                          course.title
                        }
                      </td>

                      <td>
                        {
                          course.category
                        }
                      </td>

                      <td>
                        {
                          course.level
                        }
                      </td>

                      <td>
                        $
                        {
                          course.price
                        }
                      </td>

                      <td>
                        <div className="flex gap-2">
                          <Link
                            href={`/items/${course._id}`}
                            className="btn btn-sm btn-primary"
                          >
                            View
                          </Link>

                          <button
                            onClick={() =>
                              handleDelete(
                                course._id
                              )
                            }
                            className="btn btn-sm btn-error"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
            {courses.map(
              (course) => (
                <div
                  key={
                    course._id
                  }
                  className="card bg-base-100 shadow-xl"
                >
                  <figure>
                    <img
                      src={
                        course.image
                      }
                      alt={
                        course.title
                      }
                      className="h-52 w-full object-cover"
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

                    <p>
                      Price: $
                      {
                        course.price
                      }
                    </p>

                    <div className="card-actions mt-4">
                      <Link
                        href={`/items/${course._id}`}
                        className="btn btn-primary flex-1"
                      >
                        View
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(
                            course._id
                          )
                        }
                        className="btn btn-error flex-1"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </>
      )}
    </div>
   </PrivateRoute>
  );
}