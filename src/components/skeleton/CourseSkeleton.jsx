export default function CourseSkeleton() {
  return (
    <div className="card bg-base-100 shadow-lg">

      {/* Image */}
      <div className="skeleton h-56 w-full rounded-t-2xl"></div>

      <div className="card-body">

        {/* Badges */}
        <div className="flex justify-between items-center">
          <div className="skeleton h-6 w-24"></div>

          <div className="skeleton h-6 w-20"></div>
        </div>

        {/* Title */}
        <div className="skeleton h-7 w-3/4"></div>

        {/* Description */}
        <div className="space-y-2">
          <div className="skeleton h-4 w-full"></div>

          <div className="skeleton h-4 w-full"></div>

          <div className="skeleton h-4 w-2/3"></div>
        </div>

        {/* Duration & Price */}
        <div className="flex justify-between mt-3">
          <div className="skeleton h-5 w-20"></div>

          <div className="skeleton h-5 w-16"></div>
        </div>

        {/* Button */}
        <div className="skeleton h-12 w-full mt-4"></div>

      </div>
    </div>
  );
}