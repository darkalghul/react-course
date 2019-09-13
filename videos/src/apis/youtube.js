import axios from "axios";

const key = "AIzaSyC3riU7XMrO_mWbffu6njCtFV9lQcPD6g8";

export default axios.create({
   baseURL: "https://www.googleapis.com/youtube/v3",
   params: {
      part: "snippet",
      maxResults: 10,
      key
   }
});
