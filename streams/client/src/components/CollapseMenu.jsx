import React from "react";
import { Link } from "react-router-dom";

const CollapseMenu = () => {
   return (
      <div className="collapse navbar-collapse" id="mobile">
         <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
               <li className="nav-item">
                  <Link className="nav-link" to="/">
                     All Streams
                  </Link>
               </li>
               {/* <a
                  className="nav-link dropdown-toggle"
                  id="dropdown-menu"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
               >
                  Streams
               </a>
               <div className="dropdown-menu" aria-labelledby="dropdown-menu">
                  <Link className="dropdown-item" to="/streams/new">
                     Create
                  </Link>
                  <Link className="dropdown-item" to="/streams/edit">
                     Edit
                  </Link>
                  <Link className="dropdown-item" to="/streams/delete">
                     Delete
                  </Link>
                  <Link className="dropdown-item" to="/streams/show">
                     Show
                  </Link>
               </div> */}
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/login">
                  Login
               </Link>
            </li>
         </ul>
      </div>
   );
};

export default CollapseMenu;
