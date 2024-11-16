import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-green-500 px-6 py-4 flex items-center justify-between shadow-lg">
    {/* Project Name */}
    <div className="text-xl font-bold text-white">
      FoodiesHub
    </div>
    {/* Navigation Links */}
    <div className="flex space-x-6">
      <Link 
        to="/" 
        className="hover:underline text-white font-medium"
      >
        Home
      </Link>
      <Link 
        to="/add-recipe" 
        className="hover:underline text-white font-medium"
      >
        Add Recipe
      </Link>
      <Link 
        to="/about" 
        className="hover:underline text-white font-medium"
      >
        About
      </Link>
    </div>
  </nav>
);

export default Navbar;
