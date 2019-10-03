import React from "react";
import { Link } from "react-router-dom";
import CollapseMenu from "./CollapseMenu";

const Header = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container">
            <Link to="/" className="navbar-brand">
               Streamer
            </Link>
            <button
               className="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#mobile"
               aria-controls="mobile"
               aria-expanded="false"
            >
               <span className="navbar-toggler-icon"></span>
            </button>

            <CollapseMenu />
         </div>
      </nav>
   );
};

export default Header;
