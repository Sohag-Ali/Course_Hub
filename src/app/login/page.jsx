"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // Firebase Login Here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      <div className="card w-full max-w-md bg-base-100 shadow-2xl">

        <div className="card-body">

          <h1 className="text-4xl font-bold text-center">
            Welcome Back
          </h1>

          <p className="text-center text-base-content/70">
            Login to continue learning
          </p>

          <form
            onSubmit={handleLogin}
            className="space-y-4 mt-5"
          >

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
              Login
            </button>

          </form>

          <button className="btn btn-outline w-full mt-4">
            <FcGoogle size={24} />
            Continue With Google
          </button>

          <p className="text-center mt-5">
            Don&apos;t forget to login?
            <Link
              href="/register"
              className="text-primary ml-2 font-semibold"
            >
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}