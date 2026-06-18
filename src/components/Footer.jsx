import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaGraduationCap,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaGraduationCap className="text-3xl text-primary" />
              <h2 className="text-2xl font-bold">
                CourseHub
              </h2>
            </div>

            <p className="text-sm leading-6 text-neutral-content/80">
              Learn new skills, grow your career, and
              achieve your goals with our curated
              online courses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link href="/">Home</Link>
              <Link href="/items">
                Courses
              </Link>
              <Link href="/about">
                About
              </Link>
              <Link href="/login">
                Login
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="footer-title">
              Resources
            </h3>

            <div className="flex flex-col gap-2">
              <Link href="/items/add">
                Add Course
              </Link>

              <Link href="/items/manage">
                Manage Courses
              </Link>

              <Link href="/privacy-policy">
                Privacy Policy
              </Link>

              <Link href="/terms">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-title">
              Contact
            </h3>

            <div className="space-y-2 text-sm">
              <p>Email: sohag2879@gmail.com</p>
              <p>Phone: +880 1728918054</p>
              <p>Dhaka, Bangladesh</p>
            </div>

            <div className="flex gap-3 mt-5">
              <a
                href="https://www.facebook.com/share/14bkG6xmEha/"
                className="btn btn-circle btn-sm btn-primary"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.linkedin.com/in/sohag-ali-7b1061284?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                className="btn btn-circle btn-sm btn-primary"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/Sohag-Ali"
                className="btn btn-circle btn-sm btn-primary"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-content/20 mt-10 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} CourseHub.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;