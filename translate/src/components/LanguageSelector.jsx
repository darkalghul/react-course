import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import LanguageContext from "../contexts/LanguageContext";
import "./app.css";

class LanguageSelector extends React.Component {
   static contextType = LanguageContext;

   render() {
      return (
         <Navbar bg="light" expand="md">
            <div className="container">
               <Navbar.Brand href="#">Multilingual</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                     <NavDropdown
                        title={
                           this.context.language === "english"
                              ? "Dropdown"
                              : "Dropdown-Liste"
                        }
                        id="basic-nav-dropdown"
                     >
                        <p
                           className="dropdown-item"
                           onClick={() =>
                              this.context.onLanguageChange("english")
                           }
                        >
                           <span className="flag-icon flag-icon-us"></span>{" "}
                           English
                        </p>
                        <p
                           className="dropdown-item"
                           onClick={() =>
                              this.context.onLanguageChange("german")
                           }
                        >
                           <span className="flag-icon flag-icon-de"></span>{" "}
                           German
                        </p>
                     </NavDropdown>
                  </Nav>
               </Navbar.Collapse>
            </div>
         </Navbar>
      );
   }
}

export default LanguageSelector;
