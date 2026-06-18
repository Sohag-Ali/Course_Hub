export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-pulse">

      {/* Back Button */}

      <div className="h-10 w-40 bg-base-300 rounded-lg mb-8"></div>

      {/* Main Section */}

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Image Skeleton */}

        <div className="h-[450px] bg-base-300 rounded-3xl"></div>

        {/* Content Skeleton */}

        <div>

          <div className="h-8 w-28 bg-base-300 rounded-full mb-4"></div>

          <div className="h-14 w-3/4 bg-base-300 rounded-xl mb-6"></div>

          <div className="space-y-3 mb-8">

            <div className="h-4 bg-base-300 rounded"></div>

            <div className="h-4 bg-base-300 rounded"></div>

            <div className="h-4 bg-base-300 rounded w-5/6"></div>

            <div className="h-4 bg-base-300 rounded w-4/6"></div>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 gap-4">

            {[1, 2, 3, 4].map(
              (item) => (
                <div
                  key={item}
                  className="h-24 bg-base-300 rounded-2xl"
                ></div>
              )
            )}

          </div>

          {/* Buttons */}

          <div className="flex gap-4 mt-8">

            <div className="h-12 w-36 bg-base-300 rounded-xl"></div>

            <div className="h-12 w-36 bg-base-300 rounded-xl"></div>

          </div>

        </div>

      </div>

      {/* Description Section */}

      <div className="mt-20">

        <div className="bg-base-200 rounded-3xl p-8">

          <div className="h-10 w-64 bg-base-300 rounded mb-6"></div>

          <div className="space-y-4">

            <div className="h-4 bg-base-300 rounded"></div>

            <div className="h-4 bg-base-300 rounded"></div>

            <div className="h-4 bg-base-300 rounded"></div>

            <div className="h-4 bg-base-300 rounded w-5/6"></div>

            <div className="h-4 bg-base-300 rounded w-4/6"></div>

          </div>

        </div>

      </div>

      {/* Related Courses */}

      <div className="mt-20">

        <div className="h-12 w-64 bg-base-300 rounded mb-8"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[1, 2, 3].map(
            (item) => (
              <div
                key={item}
                className="bg-base-200 rounded-3xl overflow-hidden"
              >

                <div className="h-56 bg-base-300"></div>

                <div className="p-6">

                  <div className="h-6 w-24 bg-base-300 rounded-full mb-4"></div>

                  <div className="h-8 bg-base-300 rounded mb-3"></div>

                  <div className="h-4 bg-base-300 rounded mb-2"></div>

                  <div className="h-4 bg-base-300 rounded w-4/5 mb-5"></div>

                  <div className="h-10 bg-base-300 rounded-xl"></div>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}