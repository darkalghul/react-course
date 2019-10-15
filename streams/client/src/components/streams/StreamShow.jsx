import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions/index";

class StreamShow extends React.Component {
   constructor(props) {
      super(props);

      this.videRef = React.createRef();
   }

   componentDidMount() {
      const { id } = this.props.match.params;

      this.props.fetchStream(id);
      this.buildPlayer();
   }

   componentDidUpdate() {
      this.buildPlayer();
   }

   componentWillUnmount() {
      this.player.destroy();
   }

   buildPlayer() {
      if (this.player || !this.props.stream) {
         return;
      }

      const { id } = this.props.match.params;

      this.player = flv.createPlayer({
         type: "flv",
         url: `http://localhost:8000/live/${id}.flv`
      });

      this.player.attachMediaElement(this.videRef.current);
      this.player.load();
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
                     <video ref={this.videRef} controls src="" />
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
