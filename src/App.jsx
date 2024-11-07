import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense } from "react";
// import Footer from "./components/static/Footer";
// import Navbar from "./components/navbar/Navbar";
// import ScrollToTop from "./components/static/ScrollToTop";
import allRoutes from "./utils/routes";
import Loader from "./utils/loader";

function App() {
  
  return (
    <div className="App flex flex-col">
      
        <Suspense fallback={<Loader />}>
          {/* <Header /> */}
          {/* <Navbar /> */}
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
          {/* <Footer /> */}
        </Suspense>
    </div>
  );
}

export default App;