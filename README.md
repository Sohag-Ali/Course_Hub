# 🎓 CourseHub

A modern and responsive online learning platform built with Next.js, Firebase Authentication, MongoDB, Tailwind CSS, and DaisyUI. CourseHub enables learners to explore courses, view detailed information, and manage educational content through a clean and user-friendly interface.

## 🚀 Live Demo

🔗 Live Site: [Live URL](https://course-hub-tau-ashy.vercel.app/)

## 📌 Project Overview

CourseHub is an educational platform designed to help students discover and enroll in high-quality online courses. The platform provides secure authentication, course management features, dynamic course details, and a modern responsive user experience.

## ✨ Features

### 🔐 Authentication

* Email & Password Authentication
* Google Sign-In
* Protected Routes
* User Session Management
* Secure Logout Functionality

### 📚 Course Management

* View All Courses
* Search Courses
* Filter by Category
* Filter by Level
* Dynamic Course Details Page
* Add New Course (Protected)
* Manage Courses (Protected)
* Delete Course Functionality

### 🎨 User Interface

* Fully Responsive Design
* Modern Hero Section
* Featured Courses Section
* Testimonials Slider
* Professional About Page
* Privacy Policy Page
* Terms & Conditions Page
* Loading States & Skeleton Screens
* Custom 404 Page
* Beautiful Animations

### 📱 Responsive Layout

* Mobile Friendly
* Tablet Optimized
* Desktop Optimized

## 🛠️ Technologies Used

### Frontend

* Next.js 15
* React.js
* Tailwind CSS
* DaisyUI
* Framer Motion
* Swiper.js
* React Icons
* SweetAlert2

### Backend

* Next.js API Routes

### Database

* MongoDB Atlas

### Authentication

* Firebase Authentication

### Deployment

* Vercel

## 📂 Project Structure

```bash
src
│
├── app
│   ├── about
│   ├── items
│   │   ├── [id]
│   │   ├── add
│   │   └── manage
│   ├── login
│   ├── register
│   ├── privacy-policy
│   └── terms
│
├── components
│   ├── home
│   ├── shared
│   ├── skeleton
│   └── ui
│
├── provider
│   └── AuthProvider
│
├── firebase
│   └── firebase.config
│
└── lib
    └── dbConnect
```

## 🔑 Environment Variables

Create a `.env.local` file in the root directory and add:

```env
MONGODBURI=your_mongodb_uri
DBNAME=your_database_name

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/Sohag-Ali/Course_Hub.git
```

Navigate to the project folder:

```bash
cd hero-kids
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## 🎯 Key Learning Outcomes

* Next.js App Router
* Dynamic Routing
* MongoDB CRUD Operations
* Firebase Authentication
* Protected Routes
* Responsive UI Design
* API Route Development
* State Management
* Modern UI/UX Practices

## 🔒 Protected Routes

The following routes require authentication:

```bash
/items/add
/items/manage
```

Unauthorized users are redirected to the login page.

## 📈 Future Improvements

* Course Enrollment System
* Wishlist Feature
* User Dashboard
* Instructor Dashboard
* Course Reviews & Ratings
* Dark Mode Support
* Pagination
* Payment Integration
* Certificate Generation

## 👨‍💻 Developer

**Sohag Ali**

* GitHub: https://github.com/Sohag-Ali
* LinkedIn: Add Your LinkedIn URL

## 📄 License

This project is developed for educational purposes and portfolio demonstration.

---

⭐ If you like this project, consider giving it a star on GitHub.
