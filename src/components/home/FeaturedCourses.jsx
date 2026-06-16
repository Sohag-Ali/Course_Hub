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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course._id.toString()}
              course={JSON.parse(
                JSON.stringify(course)
              )}
            />
          ))}
        </div>

      </div>
    </section>
  );
}