import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

const App = () => {
  const context = useContext(ThemeContext)

  const appStyle = context.isDarkTheme
  ? { background: "gray", color: "white" }
  : { background: "lightgreen", color: "black" };

  return (
      <div className="App" style={appStyle}>
        <Router>
          <Navbar />
          <Home />
        </Router>
      </div>
  );
};
export default App;

