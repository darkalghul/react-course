import React from "react";
import PostList from "./PostList";

const App = () => {
   return (
      <div className="ui container grid">
         <div className="ui centered row">
            <div className="twelve wide column">
               <PostList />
            </div>
         </div>
      </div>
   );
};

export default App;
