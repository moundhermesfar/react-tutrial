function Navbar() {

    const links = [
        {name: 'HOME'},
        {name: 'ABOUT'},
        {name: 'CARS'},
        {name: 'CONTACT'},
    ]

  return (
    <nav className="navbar">
      <div>
        <h1 className="logo">CASRSSO</h1>
      </div>
      <div className="links">
        <ul>
         {links.map((link, index) => (
            <li className="link" key={index}>{link.name}</li>
         ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
