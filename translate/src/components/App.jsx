import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
   render() {
      return (
         <LanguageStore>
            <LanguageSelector />

            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <ColorContext.Provider value="btn-danger">
                        <UserCreate />
                     </ColorContext.Provider>
                  </div>
               </div>
            </div>
         </LanguageStore>
      );
   }
}

export default App;
