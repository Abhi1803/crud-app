import React from "react";

import Logout from "../Logout";
import '../app.css'
const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        height: "50%"
      }}
      class="header"
    >
      <h1>Employee Management Software</h1>
      <div>
        <button  class="btn btn-white btn-animate" onClick={() => setIsAdding(true)}>
          Add Employee
        </button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;
