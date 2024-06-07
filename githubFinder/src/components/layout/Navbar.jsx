import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
const Navbar = () => {
  const context = useContext(ThemeContext)
  const navbarClass = context.isDarkTheme ? 'navbar bg-dark text-white' : 'navbar bg-success text-dark';
  return (
    <nav className={navbarClass}>
      <h1>
        <i className="fab fa-github" />GitHub Finder
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li> 
        <li>
          <button onClick={context.toggleTheme}>{context.isDarkTheme ? 'Light' : 'Dark' }</button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

