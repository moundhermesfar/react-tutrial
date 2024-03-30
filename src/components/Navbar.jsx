import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "CARS", path: "/cars" },
    // { name: "CONTACT" },
  ];

  return (
    <nav className="navbar">
      <div>
        <h1 className="logo">CASRSSO</h1>
      </div>
      <div className="links">
        <ul>
          {links.map((link, index) => (
            <Link to={link.path} key={index}>
              <li className="link">{link.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
