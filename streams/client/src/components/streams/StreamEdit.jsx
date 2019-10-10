import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {
   componentDidMount() {
      this.props.fetchStream(this.props.match.params.id);
   }

   render() {
      if (!this.props.stream) {
         return (
            <div className="container my-3">
               <div className="row justify-content-center">
                  <div className="spinner-border" role="status">
                     <span className="sr-only">Loading...</span>
                  </div>
               </div>
            </div>
         );
      }
      return (
         <div className="container my-3">
            <div className="row">
               <div className="col-12 col-md-12"></div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => {
   return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
   mapStateToProps,
   { fetchStream }
)(StreamEdit);
