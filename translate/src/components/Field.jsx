import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
   // static contextType = LanguageContext;

   render() {
      // const name = this.context === "english" ? "Your Name" : "Dein Name";
      // const placeholder =
      //    this.context === "english" ? "Type your Name" : "Gib deinen Namen ein";

      return (
         <div className="form-group">
            <label htmlFor="input">
               <LanguageContext.Consumer>
                  {value => (value === "english" ? "Your Name" : "Dein Name")}
               </LanguageContext.Consumer>
            </label>
            <input type="text" className="form-control" id="input" />
         </div>
      );
   }
}

export default Field;
