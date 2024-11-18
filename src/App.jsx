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
  const currentRoute = allRoutes.find(route => route.path === location.pathname);
  
  return (
    <div className="App flex flex-col">
        <Suspense fallback={<Loader />}>
          <ScrollToTop />
          {!currentRoute?.hideNavbar && <Navbar />}
          <div className="routes-layout">
              <Routes>
                {allRoutes.map((route) => (
                  <Route
                    key={route.id}
                    exact
                    path={route.path}
                    element={route.component}
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