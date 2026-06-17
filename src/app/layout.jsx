import AuthProvider from "@/provider/AuthProvider";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Hero Kids",
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
      <body className="min-h-full flex flex-col">

        <AuthProvider>

          <header className="py-2 md:w-11/12 mx-auto">
            <Navbar />
          </header>

          <main className="flex-1 py-2 md:w-11/12 mx-auto">
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