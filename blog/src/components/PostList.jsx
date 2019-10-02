import React from "react";
import faker from "faker";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
   componentDidMount() {
      this.props.fetchPostsAndUsers();
   }

   renderList() {
      return this.props.posts.map(posts => {
         return (
            <div className="item" key={posts.id}>
               <div className="ui small image">
                  <img src={faker.image.avatar()} alt="" />
               </div>
               <div className="content">
                  <div className="header">{posts.title}</div>
                  <div className="description">
                     <p>{posts.body}</p>
                  </div>
                  <UserHeader userId={posts.userId} />
               </div>
            </div>
         );
      });
   }

   render() {
      return <div className="ui items divided list">{this.renderList()}</div>;
   }
}

const mapStateToProps = state => {
   return { posts: state.posts };
};

export default connect(
   mapStateToProps,
   { fetchPostsAndUsers }
)(PostList);
