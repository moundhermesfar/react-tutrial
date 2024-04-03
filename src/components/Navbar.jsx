import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "CARS", path: "/cars" },
    { name: "REVIEWS", path: "/reviews" },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1 className="link">CASRSSO</h1>
        </Link>
      </div>
      <div className="links">
        <ul>
          {links.map((link, index) => (
            <li className="link" key={index}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
