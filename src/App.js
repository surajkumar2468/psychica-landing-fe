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
      </Router>
    </div>
  );
}

export default App;
