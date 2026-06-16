import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <figure>
        <Image
          src={course.image}
          alt={course.title}
          width={500}
          height={300}
          className="w-full h-56 object-cover"
        />
      </figure>

      <div className="card-body">
        <div className="flex justify-between items-center">
          <div className="badge badge-primary">
            {course.category}
          </div>

          <div className="badge badge-outline">
            {course.level}
          </div>
        </div>

        <h2 className="card-title text-xl">
          {course.title}
        </h2>

        <p className="line-clamp-2 text-sm text-base-content/70">
          {course.shortDescription}
        </p>

        <div className="flex justify-between mt-3">
          <span className="font-semibold">
            {course.duration}
          </span>

          <span className="font-bold text-primary">
            ${course.price}
          </span>
        </div>

        <Link
          href={`/items/${course._id.toString()}`}
          className="btn btn-primary mt-4 w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;