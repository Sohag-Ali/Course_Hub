"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import useAuth from "@/hooks/useAuth";

export default function RegisterPage() {
  const { registerUser, googleLogin } =
    useAuth();

  const router = useRouter();

  const handleRegister = async (
    e
  ) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password =
      form.password.value;

    if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        title:
          "Password must be at least 6 characters",
      });
    }

    try {
      await registerUser(
        email,
        password
      );

      Swal.fire({
        icon: "success",
        title:
          "Registration Successful",
        timer: 1500,
        showConfirmButton: false,
      });

      form.reset();

      router.push("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title:
          error.message,
      });
    }
  };

  const handleGoogleLogin =
    async () => {
      try {
        await googleLogin();

        Swal.fire({
          icon: "success",
          title:
            "Login Successful",
          timer: 1500,
          showConfirmButton:
            false,
        });

        router.push("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title:
            error.message,
        });
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      <div className="card w-full max-w-md bg-base-100 shadow-2xl">

        <div className="card-body">

          <h1 className="text-4xl font-bold text-center">
            Create Account
          </h1>

          <p className="text-center text-base-content/70">
            Join HeroKids today
          </p>

          <form
            onSubmit={
              handleRegister
            }
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

          <button
            onClick={
              handleGoogleLogin
            }
            className="btn btn-outline w-full mt-4"
          >
            <FcGoogle
              size={24}
            />
            Continue With Google
          </button>

          <p className="text-center mt-5">
            Already have an
            account?

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