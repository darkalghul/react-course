import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
   // static contextType = LanguageContext;

   renderName(language) {
      return language === "english" ? "Your Name" : "Dein Name";
   }

   render() {
      // const name = this.context.language === "english" ? "Your Name" : "Dein Name";
      // const placeholder =
      //    this.context/language === "english" ? "Type your Name" : "Gib deinen Namen ein";

      return (
         <div className="form-group">
            <label htmlFor="input">
               <LanguageContext.Consumer>
                  {({ language }) => this.renderName(language)}
               </LanguageContext.Consumer>
            </label>
            <input type="text" className="form-control" id="input" />
         </div>
      );
   }
}

export default Field;
