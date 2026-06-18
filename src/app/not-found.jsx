import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-primary">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="mt-3 text-base-content/70">
          Sorry, the page you are looking for doesn&am;t exist.
        </p>

        <Link
          href="/"
          className="btn btn-primary mt-6"
        >
          Back To Home
        </Link>

      </div>

    </div>
  );
}