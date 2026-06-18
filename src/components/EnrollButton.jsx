"use client";

import Swal from "sweetalert2";

export default function EnrollButton({
  course,
}) {
  const handleEnroll = () => {
    const enrolledCourses =
      JSON.parse(
        localStorage.getItem(
          "enrolledCourses"
        )
      ) || [];

    const alreadyEnrolled =
      enrolledCourses.find(
        (item) =>
          item.id ===
          course.id
      );

    if (alreadyEnrolled) {
      Swal.fire({
        icon: "info",
        title:
          "Already Enrolled",
        text: "You already enrolled in this course.",
      });

      return;
    }

    enrolledCourses.push({
      id: course.id,
      title: course.title,
      image: course.image,
      category:
        course.category,
      level: course.level,
      price: course.price,
    });

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(
        enrolledCourses
      )
    );

    Swal.fire({
      icon: "success",
      title:
        "Enrollment Successful 🎉",
      text: "Course added to My Courses",
    });
  };

  return (
    <button
      onClick={handleEnroll}
      className="btn btn-primary btn-lg"
    >
      Enroll Now
    </button>
  );
}