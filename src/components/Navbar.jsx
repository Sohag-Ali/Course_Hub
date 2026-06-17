"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const { user, logoutUser } = useAuth();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/items" },
    { name: "About", href: "/about" },
    { name: "Add Course", href: "/items/add" },
    { name: "Manage", href: "/items/manage" },
  ];

  const links = navLinks.map((link) => (
    <li key={link.href}>
      <Link
        href={link.href}
        className={`font-medium transition-all duration-200 ${
          pathname === link.href
            ? "text-primary"
            : "text-base-content"
        }`}
      >
        {link.name}
      </Link>
    </li>
  ));

  const handleLogout = async () => {
  try {
    await logoutUser();
  } catch (error) {
    console.log(error);
  }
};

  return (
    <header className="sticky top-0 z-50 bg-base-100/90 backdrop-blur-md border-b border-base-300">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <HiOutlineMenuAlt3 size={24} />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-3 shadow-lg bg-base-100 rounded-box w-64"
            >
              {links}
            </ul>
          </div>

          <Link
            href="/"
            className="text-2xl font-bold text-primary"
          >
            CourseHub
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">
            {links}
          </ul>
        </div>

        {/* Right */}
       <div className="navbar-end gap-2">
  {user ? (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            src={
              user.photoURL ||
              "https://i.ibb.co/4pDNDk1/avatar.png"
            }
            alt="user"
          />
        </div>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-56"
      >
        <li className="font-bold px-2 py-1">
          {user.displayName ||
            "User"}
        </li>

        <li className="text-xs opacity-70 px-2">
          {user.email}
        </li>

        <div className="divider my-1"></div>

        <li>
          <Link href="/items/add">
            Add Course
          </Link>
        </li>

        <li>
          <Link href="/items/manage">
            Manage Courses
          </Link>
        </li>

        <li>
          <button
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  ) : (
    <>
      <Link
        href="/login"
        className="btn btn-outline btn-primary hidden sm:flex"
      >
        Login
      </Link>

      <Link
        href="/register"
        className="btn btn-primary"
      >
        Register
      </Link>
    </>
  )}
</div>
      </div>
    </header>
  );
}