import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./app.css";
import UserCreate from "./UserCreate";

class App extends React.Component {
   state = {
      language: "english"
   };

   onLanguageChange = language => {
      this.setState({
         language
      });
   };

   render() {
      return (
         <>
            <Navbar bg="light" expand="md">
               <div className="container">
                  <Navbar.Brand href="#">Multilingual</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="ml-auto">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                           <p
                              className="dropdown-item"
                              onClick={() => this.onLanguageChange("english")}
                           >
                              <span className="flag-icon flag-icon-us"></span>{" "}
                              English
                           </p>
                           <p
                              className="dropdown-item"
                              onClick={() => this.onLanguageChange("german")}
                           >
                              <span className="flag-icon flag-icon-de"></span>{" "}
                              German
                           </p>
                        </NavDropdown>
                     </Nav>
                  </Navbar.Collapse>
               </div>
            </Navbar>
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <UserCreate />
                  </div>
               </div>
            </div>
         </>
      );
   }
}

export default App;
