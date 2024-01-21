import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="title">
      <div className="blog-name">Yuva's Blog</div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/create">Create Blog</Link>
      </div>
    </div>
  );
};
export default Navbar;
