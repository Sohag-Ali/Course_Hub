export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}

      <div className="relative z-10 flex flex-col items-center">

        {/* Logo Circle */}

        <div className="relative">

          <div className="w-24 h-24 rounded-full border-4 border-primary/20"></div>

          <div className="absolute inset-0 w-24 h-24 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>

          <div className="absolute inset-3 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
            🎓
          </div>

        </div>

        {/* Text */}

        <h2 className="mt-8 text-3xl font-bold">
          CourseHub
        </h2>

        <p className="text-base-content/60 mt-2">
          Loading your learning experience...
        </p>

        {/* Dots */}

        <div className="flex gap-2 mt-6">

          <span className="w-3 h-3 bg-primary rounded-full animate-bounce"></span>

          <span
            className="w-3 h-3 bg-primary rounded-full animate-bounce"
            style={{
              animationDelay: "0.2s",
            }}
          ></span>

          <span
            className="w-3 h-3 bg-primary rounded-full animate-bounce"
            style={{
              animationDelay: "0.4s",
            }}
          ></span>

        </div>

      </div>

    </div>
  );
}