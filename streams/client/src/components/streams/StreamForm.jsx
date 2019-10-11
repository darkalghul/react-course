import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
   renderError({ touched, error }) {
      if (touched && error) {
         return <small className="form-text text-danger">{error}</small>;
      }
   }

   renderInput = ({ input, label, meta }) => {
      return (
         <div className="form-group">
            <label>{label}</label>
            <input {...input} className="form-control" placeholder={label} />
            {this.renderError(meta)}
         </div>
      );
   };

   onSubmit = values => {
      this.props.onSubmit(values);
   };

   render() {
      return (
         <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
               name="title"
               component={this.renderInput}
               label="Enter title"
            />
            <Field
               name="description"
               component={this.renderInput}
               label="Enter description"
            />
            <button className="btn btn-primary">Submit</button>
         </form>
      );
   }
}

const validate = values => {
   const errs = {};

   if (!values.title) {
      errs.title = "To submit the form, please enter a title value";
   }

   if (!values.description) {
      errs.description = "To submit the form, please enter a description value";
   }

   return errs;
};

export default reduxForm({
   form: "StreamForm",
   validate
})(StreamForm);
