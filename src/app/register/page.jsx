"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    // Firebase Register Here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      <div className="card w-full max-w-md bg-base-100 shadow-2xl">

        <div className="card-body">

          <h1 className="text-4xl font-bold text-center">
            Create Account
          </h1>

          <p className="text-center text-base-content/70">
            Join CourseHub today
          </p>

          <form
            onSubmit={handleRegister}
            className="space-y-4 mt-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />

            <button className="btn btn-primary w-full">
              Register
            </button>

          </form>

          <button className="btn btn-outline w-full mt-4">
            <FcGoogle size={24} />
            Continue With Google
          </button>

          <p className="text-center mt-5">
            Already have an account?
            <Link
              href="/login"
              className="text-primary ml-2 font-semibold"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}