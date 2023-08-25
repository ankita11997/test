import React from 'react'

const Navbar = ({ name, version }) => {
  
  return (
   
    <nav className="navbar bg-dark">
        <div className="container-fluid">
<span className="navbar-brand mb-0 h1 text-light">
  {name}
  </span>
  <span className="navbar-brand mb-0 h1 text-light">
  {version}
  </span>

  </div>
      </nav>
   
  );
};

export default Navbar;
Navbar.defaultProps = {name:"Todo App", version: 2.1 };