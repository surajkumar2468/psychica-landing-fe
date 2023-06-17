import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "animate.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./config/routes";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  // const [isTokenLogin, setIsTokenLogin] = useState(false)
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {routes.map(({ id, path, component }) => (
            <Route key={id} path={path} element={component} />
          ))}
        </Routes>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-2">
                <span className="ftr_logo">
                  <a href="">
                    <img src="/images/logo.svg" alt="" />
                  </a>
                </span>
              </div>
              <div className="col-12 col-md-3">
                <h3>Explore </h3>
                <ul>
                  <li>
                    <a href="">By Topic</a>
                  </li>
                  <li>
                    <a href="">By Ability</a>
                  </li>
                  <li>
                    <a href="">By Tools</a>
                  </li>
                  <li>
                    <a href="">By Style</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-3">
                <ol>
                  <li>
                    <a href="">About Psychix</a>
                  </li>
                  <li>
                    <a href="">Kevin’s Story</a>
                  </li>
                  <li>
                    <a href="">How It Works</a>
                  </li>
                  <li>
                    <a href="">The Difference</a>
                  </li>
                  <li>
                    <a href="">Psychic Features</a>
                  </li>
                  <li>
                    <a href="">Our Blog</a>
                  </li>
                  <li>
                    <a href="">Meet Oracle</a>
                  </li>
                </ol>
              </div>
              <div className="col-12 col-md-4">
                <span className="ftr_img">
                  <div>
                    <img src="/images/illustartion.png" alt="" />
                  </div>
                  <div>
                    {" "}
                    <img src="/images/illustartion2.png" alt="" />
                  </div>{" "}
                </span>
              </div>
            </div>
          </div>
        </footer>
        <div className="ftr_bottom">
          <div className="container">
            <div className="ftr_bottom_row">
              <p>Copyright 2023 Profesy, LLC. All rights are reserved.</p>
              <ul>
                <li>
                  <a href="">Terms and Conditions</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Advisor Agreement</a>
                </li>
                <li>
                  <a href="">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
