import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-green-500 p-4 text-white">
    <Link to="/" className="mr-4">Home</Link>
    <Link to="/add-recipe" className="mr-4">Add Recipe</Link>
    <Link to="/about">About</Link>
  </nav>
);

export default Navbar;