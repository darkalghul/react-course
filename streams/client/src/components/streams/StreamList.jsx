import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
   componentDidMount() {
      this.props.fetchStreams();
   }

   checkAdminUser = stream => {
      if (stream.userId === this.props.currentUser) {
         return (
            <>
               <span className="float-right">
                  <Link
                     to={`/streams/delete/${stream.id}`}
                     className="btn btn-danger"
                  >
                     <i className="fas fa-trash-alt"></i>
                  </Link>
               </span>
               <span className="float-right mr-1">
                  <Link
                     to={`/streams/edit/${stream.id}`}
                     className="btn btn-primary"
                  >
                     <i className="fas fa-edit"></i>
                  </Link>
               </span>
            </>
         );
      } else {
         return <></>;
      }
   };

   renderList() {
      return this.props.streams.map(stream => {
         return (
            <li key={stream.id} className="list-group-item clearfix">
               <div className=" float-left">
                  <Link
                     to={`/streams/${stream.id}`}
                     className="d-block h5 mb-1"
                  >
                     {stream.title}
                  </Link>
                  <p className="mb-0 float-left">{stream.description}</p>
               </div>
               {this.checkAdminUser(stream)}
            </li>
         );
      });
   }

   renderCreate() {
      if (this.props.isSignedIn) {
         return (
            <div className="col-12 col-md-12 clearfix">
               <div className="float-right">
                  <Link to="/streams/new" className="btn btn-primary">
                     Create Stream
                  </Link>
               </div>
            </div>
         );
      }
   }
   render() {
      return (
         <div className="container my-3">
            <div className="row">
               <div className="col-12 col-md-12">
                  <h2>Streams</h2>
                  <ul className="list-group">{this.renderList()}</ul>
               </div>
            </div>
            <div className="row mt-3">{this.renderCreate()}</div>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      streams: Object.values(state.streams),
      currentUser: state.auth.userId,
      isSignedIn: state.auth.isSignedIn
   };
};

export default connect(
   mapStateToProps,
   { fetchStreams }
)(StreamList);
