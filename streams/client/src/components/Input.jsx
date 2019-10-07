import React from "react";

const Input = ({ input, label }) => {
   return (
      <div class="form-group">
         <label>{label}</label>
         <input class="form-control" placeholder={label} {...input} />
      </div>
   );
};

export default Input;
