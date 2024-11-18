import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./utils/ScrollToTop";
import allRoutes from "./utils/routes";
import Loader from "./utils/loader";
import Toaster from "./utils/Toaster";

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Modified findCurrentRoute function
  const findCurrentRoute = (routes) => {
    // First check if we're in any admin route
    if (currentPath.startsWith('/admin')) {
      return routes.find(route => route.path === '/admin/*');
    }

    // For non-admin routes
    for (const route of routes) {
      if (currentPath === route.path) {
        return route;
      }
    }
    return null;
  };

  const currentRoute = findCurrentRoute(allRoutes);

  return (
    <div className="App flex flex-col">
        <Suspense fallback={<Loader />}>
          <ScrollToTop />
          {!!currentRoute?.hideNavbar === false && <Navbar />}
          <div className="routes-layout">
              <Routes>
                {allRoutes.map((route) => (
                  <Route
                    key={route.id}
                    exact
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
          </div>
          {!currentRoute?.hideNavbar && <Footer />}
        </Suspense>
        <Toaster />
    </div>
  );
}

export default App;