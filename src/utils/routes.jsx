/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const AboutPage = lazy(() => import("../pages/About"));
const TermsPage = lazy(() => import("../pages/Terms"));
const ContactUsPage = lazy(() => import("../pages/ContactUs"));
const ReviewsPage = lazy(() => import("../pages/Reviews"));
const BookingPage = lazy(() => import("../pages/Booking"));
const AuthPage = lazy(() => import("../pages/Auth"));
const AdminPage = lazy(() => import("../pages/Admin"));
// const Projects = lazy(() => import("../pages/Projects"));

const allRoutes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    hideNavbar: false,
  },
  {
    id: 2,
    path: "/about",
    element: <AboutPage />,
    hideNavbar: false,
  },
  {
    id: 3,
    path: "/terms",
    element: <TermsPage />,
    hideNavbar: false,
  },
  {
    id: 4,
    path: "/contact",
    element: <ContactUsPage />,
    hideNavbar: false,
  },
  {
    id: 5,
    path: "/reviews",
    element: <ReviewsPage />,
    hideNavbar: false,
  },
  {
    id: 6,
    path: "/book",
    element: <BookingPage />,
    hideNavbar: false,
  },
  {
    id: 7,
    path: "/auth",
    element: <AuthPage />,
    hideNavbar: false,
  },
  {
    id: 8,
    path: "/admin/*",
    element: <AdminPage />,
    hideNavbar: true,
  },
];

export default allRoutes;