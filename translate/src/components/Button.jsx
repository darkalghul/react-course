import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
   // static contextType = LanguageContext;

   render() {
      // const text = this.context === "english" ? "Submit" : "Einreichen";
      return (
         <ColorContext.Consumer>
            {color => (
               <button type="submit" className={`btn ${color}`}>
                  <LanguageContext.Consumer>
                     {value => (value === "english" ? "Submit" : "Einreichen")}
                  </LanguageContext.Consumer>
               </button>
            )}
         </ColorContext.Consumer>
      );
   }
}

export default Button;
