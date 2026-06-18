"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">

      <div className="text-center">

        <h1 className="text-6xl font-bold text-error">
          Oops!
        </h1>

        <h2 className="text-2xl font-semibold mt-4">
          Something Went Wrong
        </h2>

        <p className="mt-3 text-base-content/70">
          An unexpected error occurred.
        </p>

        <button
          onClick={() => reset()}
          className="btn btn-primary mt-6"
        >
          Try Again
        </button>

      </div>

    </div>
  );
}