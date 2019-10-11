import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
   componentDidMount() {
      this.props.fetchStream(this.props.match.params.id);
   }

   onSubmit = values => {
      console.log(values);
      this.props.editStream(this.props.match.params.id, values);
   };

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

      const { title, description } = this.props.stream;

      return (
         <div className="container my-3">
            <div className="row">
               <div className="col-12 col-md-4">
                  <StreamForm
                     initialValues={{ title, description }}
                     onSubmit={this.onSubmit}
                  />
               </div>
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
   { fetchStream, editStream }
)(StreamEdit);
