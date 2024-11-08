/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const AboutPage = lazy(() => import("../pages/About"));
const TermsPage = lazy(() => import("../pages/Terms"));
const ContactUsPage = lazy(() => import("../pages/ContactUs"));
const ReviewsPage = lazy(() => import("../pages/Reviews"));
// const Projects = lazy(() => import("../pages/Projects"));

const allRoutes = [
  {
    id: 1,
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    path: "/about",
    component: <AboutPage />,
  },
  {
    id: 3,
    path: "/terms",
    component: <TermsPage />,
  },
  {
    id: 4,
    path: "/contact",
    component: <ContactUsPage />,
  },
  {
    id: 5,
    path: "/reviews",
    component: <ReviewsPage />,
  },
];

export default allRoutes;