import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions/index";

class StreamShow extends React.Component {
   componentDidMount() {
      this.props.fetchStream(this.props.match.params.id);
   }

   renderTags() {
      const str = this.props.stream.description.split(", ");
      return str.map((tag, index) => {
         return (
            <span key={index} className="badge badge-secondary mr-1">
               {tag}
            </span>
         );
      });
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
            <div className="row justify-content-center">
               <div className="col-12">
                  <div className="card">
                     <div className="card-body">
                        <h4 className="card-title">
                           {this.props.stream.title}
                        </h4>
                        <p className="card-text">{this.renderTags()}</p>
                     </div>
                  </div>
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
   { fetchStream }
)(StreamShow);
