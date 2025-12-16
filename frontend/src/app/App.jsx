import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppProviders } from "./providers.jsx";
import CourseManagement from "../features/teacher/pages/CourseManagement.jsx"

const Home = lazy(() => import("../pages/Home.jsx"));
const Courses = lazy(() => import("../features/catalog/pages/Courses.jsx"));
const CourseDetail = lazy(() => import("../features/course/pages/CourseDetail.jsx"));
const Player = lazy(() => import("../features/course/pages/Player.jsx"));
const About = lazy(() => import("../pages/About.jsx"));
const Contact = lazy(() => import("../pages/contact.jsx")); // ✅ fixed
const SignIn = lazy(() => import("../features/auth/pages/SignIn.jsx"));
const SignUp = lazy(() => import("../features/auth/pages/SignUp.jsx"));
const NotFound = lazy(() => import("../pages/NotFound.jsx"));

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/courses", element: <Courses /> },
  { path: "/courses/:id", element: <CourseDetail /> },
  { path: "/player/:id", element: <Player /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> }, // ✅ fixed
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "*", element: <NotFound /> },
]);

export default function App() {
  return (
    <AppProviders>
      <Suspense fallback={<div className="p-6">Loading…</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </AppProviders>
  );
}
