import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
   onSubmit = values => {
      this.props.createStream(values);
   };

   render() {
      return (
         <div className="container my-3">
            <div className="row">
               <div className="col-12 col-md-4">
                  <StreamForm onSubmit={this.onSubmit} />
               </div>
            </div>
         </div>
      );
   }
}

export default connect(
   null,
   { createStream }
)(StreamCreate);
