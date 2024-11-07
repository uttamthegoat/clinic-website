import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
// import ScrollToTop from "./components/static/ScrollToTop";
import allRoutes from "./utils/routes";
import Loader from "./utils/loader";

function App() {
  
  return (
    <div className="App flex flex-col">
      
        <Suspense fallback={<Loader />}>
          <Navbar />
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
          <Footer />
        </Suspense>
    </div>
  );
}

export default App;