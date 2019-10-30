import React from 'react';

class SearchBar extends React.Component {
   state = {
      search: '',
   };

   handleInputSearch = evt => {
      this.setState({
         search: evt.target.value,
      });
   };

   onSubmit = evt => {
      evt.preventDefault();
   };

   render() {
      return (
         <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand">Navbar</span>
            <form onSubmit={this.onSubmit} className="form-inline my-2 my-lg-0">
               <input
                  type="search"
                  className="form-control mr-sm-2"
                  placeholder="Search"
                  onChange={this.handleInputSearch}
                  value={this.state.search}
               />
               <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
               >
                  Search
               </button>
            </form>
         </nav>
      );
   }
}

export default SearchBar;
