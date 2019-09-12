import axios from "axios";

export default axios.create({
   baseURL: "https://api.unsplash.com",
   headers: {
      Authorization:
         "Client-ID e18a5073fbf2375854039a105f43352b912fdf30a27487246331c56b62bb1b2c"
   }
});
