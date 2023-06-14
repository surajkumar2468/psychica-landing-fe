import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./config/routes";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
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
