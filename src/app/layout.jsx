import AuthProvider from "@/provider/AuthProvider";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "CourseHub - Your Gateway to Knowledge",
  description: "Online Learning Platform",
};

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <AuthProvider>
          <header>
            <Navbar />
          </header>
          
          <main className="flex-1">
              {children}
            
          </main>

          <footer>
            <Footer />
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}