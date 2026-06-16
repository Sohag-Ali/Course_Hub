import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-content">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          Start Learning Today
        </h2>

        <p className="mt-4 text-lg">
          Join thousands of learners and
          unlock your full potential.
        </p>

        <Link
          href="/items"
          className="btn btn-lg mt-8"
        >
          Browse Courses
        </Link>
      </div>
    </section>
  );
}