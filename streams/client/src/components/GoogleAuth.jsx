import React from "react";

class GoogleAuth extends React.Component {
   constructor() {
      super();
      this.state = {
         isSignedIn: null
      };
   }

   componentDidMount() {
      window.gapi.load("client:auth2", () => {
         window.gapi.client
            .init({
               clientId:
                  "296484010710-200iabpjuc3ag75r0fo3im12acbukhp8.apps.googleusercontent.com",
               scope: "email"
            })
            .then(() => {
               this.auth = window.gapi.auth2.getAuthInstance();
               this.setState({ isSignedIn: this.auth.isSignedIn.get() });
               this.auth.isSignedIn.listen(this.onAuthChange);
            });
      });
   }

   onAuthChange = () => {
      this.setState({ isSignedIn: this.auth.isSignedIn.get() });
   };

   onSignInClick = () => {
      this.auth.signIn();
   };

   onSignOutClick = () => {
      this.auth.signOut();
   };

   checkAuth() {
      if (this.state.isSignedIn === null) {
         return null;
      } else if (this.state.isSignedIn) {
         return (
            <button
               className="btn btn-outline-danger my-2 my-sm-0"
               type="submit"
               onClick={this.onSignOutClick}
            >
               Sign Out
            </button>
         );
      } else {
         return (
            <button
               className="btn btn-outline-danger my-2 my-sm-0"
               type="submit"
               onClick={this.onSignInClick}
            >
               Sign In with Google
            </button>
         );
      }
   }

   render() {
      return <div>{this.checkAuth()}</div>;
   }
}

export default GoogleAuth;
