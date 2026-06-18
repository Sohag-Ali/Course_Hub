"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Eye, EyeOff, Mail, Lock, GraduationCap } from "lucide-react";

export default function LoginPage() {
  const { loginUser, googleLogin } = useAuth();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    setLoading(true);

    try {
      await loginUser(email, password);

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        timer: 1500,
        showConfirmButton: false,
      });

      router.push("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);

    try {
      await googleLogin();

      Swal.fire({
        icon: "success",
        title: "Google Login Successful",
        timer: 1500,
        showConfirmButton: false,
      });

      router.push("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: error.message,
      });
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-12 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-300/40 relative z-10">
        <div className="card-body p-6 sm:p-10">
          {/* Brand */}
          <div className="flex justify-center mb-3">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="text-primary" size={30} />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-center tracking-tight">
            Welcome Back
          </h1>

          <p className="text-center text-base-content/60 mt-1.5 text-sm sm:text-base">
            Login to continue learning
          </p>

          <form onSubmit={handleLogin} className="space-y-4 mt-8">
            {/* Email */}
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-medium text-sm">
                  Email Address
                </span>
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base-content/35"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full pl-11 h-12 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-control">
              <div className="flex items-center justify-between">
                <label className="label py-1">
                  <span className="label-text font-medium text-sm">
                    Password
                  </span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-primary hover:underline font-medium"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base-content/35"
                  size={18}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full pl-11 pr-11 h-12 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-base-content/35 hover:text-base-content/70 transition-colors"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full h-12 text-base font-semibold mt-2 shadow-md hover:shadow-lg transition-shadow"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                "Login"
              )}
            </button>
          </form>

          <div className="flex items-center gap-3 my-7">
            <div className="flex-1 h-px bg-base-300" />
            <span className="text-xs text-base-content/40 font-medium tracking-wide">
              OR CONTINUE WITH
            </span>
            <div className="flex-1 h-px bg-base-300" />
          </div>

          <button
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="btn btn-outline w-full h-12 gap-2 font-medium hover:bg-base-200 transition-colors"
          >
            {googleLoading ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              <>
                <FcGoogle size={22} />
                Continue With Google
              </>
            )}
          </button>

          <p className="text-center mt-8 text-sm text-base-content/70">
            Don&apos;t have an account?
            <Link
              href="/register"
              className="text-primary ml-1.5 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}