import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
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
      this.props.createStream(values);
   };

   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-12 col-md-4">
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
               </div>
            </div>
         </div>
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

const wrapper = reduxForm({
   form: "CreateStreamForm",
   validate
})(StreamCreate);

export default connect(
   null,
   { createStream }
)(wrapper);
