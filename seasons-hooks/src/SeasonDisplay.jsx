import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
   summer: {
      text: "Let's hit the beach",
      iconName: "sun"
   },
   winter: {
      text: "Burr, it is chilly",
      iconName: "snowflake"
   }
};

const getSeason = (lat, month) => {
   if (month > 2 && month < 9) {
      return lat > 0 ? "summer" : "winter";
   } else {
      return lat > 0 ? "winter" : "summer";
   }
};
const SeasonDisplay = props => {
   const season = getSeason(props.lat, new Date().getMonth());
   const { text, iconName } = seasonConfig[season];

   return (
      <div className={`ui container ${season}`}>
         <div className="icon-container top">
            <i className={`massive icon ${iconName}`} />
         </div>
         <div className="text-container">
            <h1>{text}</h1>
         </div>
         <div className="icon-container bottom">
            <i className={`massive icon ${iconName}`} />
         </div>
      </div>
   );
};

export default SeasonDisplay;
