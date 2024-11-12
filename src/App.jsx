import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
// import ScrollToTop from "./components/static/ScrollToTop";
import allRoutes from "./utils/routes";
import Loader from "./utils/loader";

function App() {
  const location = useLocation();
  const currentRoute = allRoutes.find(route => route.path === location.pathname);
  
  return (
    <div className="App flex flex-col">
      
        <Suspense fallback={<Loader />}>
          {!currentRoute?.hideNavbar && <Navbar />}
          {/* <ScrollToTop /> */}
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
    </div>
  );
}

export default App;