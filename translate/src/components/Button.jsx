import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
   // static contextType = LanguageContext;

   render() {
      // const text = this.context === "english" ? "Submit" : "Einreichen";
      return (
         <button type="submit" className="btn btn-primary">
            <LanguageContext.Consumer>
               {value => (value === "english" ? "Submit" : "Einreichen")}
            </LanguageContext.Consumer>
         </button>
      );
   }
}

export default Button;
